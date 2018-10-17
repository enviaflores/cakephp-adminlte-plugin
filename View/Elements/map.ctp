<div>
    <div class="embed-responsive embed-responsive-4by3">
        <div id="map" class="embed-responsive-item"></div>
    </div>
    <?= $this->Html->script('AdminLTE.jQuery/jQuery-2.2.4') ?>
    <?= $this->Html->script("https://maps.googleapis.com/maps/api/js?key={$google_maps_key}") ?>
    <script>
        var polylines = [];
        var map = null;
        var index = 1;

        $(document).ready(function () {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: <?= $center['latitude'] ?>, lng: <?= $center['longitude'] ?>},
                zoom: <?= $zoom ?>
            });

            google.maps.event.addListener(map, 'idle', function() {
                updatePolylines();
            });
        });

        function updatePolylines() {
            $.ajax({
                url: '<?= Router::url(['controller' => 'Example', 'action' => 'getGeoJsonExample']) ?>',
                cache: false,
                type: 'POST',
                data: {'bounds': getBounds(), 'index': index},
                dataType: 'json',
                success: function (json) {
                    if (json.success) {
                        if (index === 3) {
                            index = 0;
                        }
                        index++;

                        if (json.data.type === 'FeatureCollection') {

                            clearMapObjects();

                            $.each(json.data.features, function (index, value) {

                                if (value.geometry.type === 'LineString') {
                                    var driverCoordinates = [];
                                    $.each(value.geometry.coordinates, function (i, v) {
                                        driverCoordinates.push({
                                            'lat': v[0],
                                            'lng': v[1]
                                        });
                                    });
                                    var drivePath = new google.maps.Polyline({
                                        path: driverCoordinates,
                                        geodesic: true,
                                        strokeColor: '#FF0000',
                                        strokeOpacity: 1.0,
                                        strokeWeight: 2
                                    });

                                    drivePath.setMap(map);
                                    polylines.push(drivePath);
                                }
                            });
                        }
                    } else {
                        console.error(json.errorMsg);
                    }
                }, error: function () {
                    console.error('<?= __('Error in AJAX request') ?>');
                }, complete: function () {
                    setTimeout(function() {
                        updatePolylines();
                    }, 10000);
                }
            });
        }

        function clearMapObjects() {
            for(var i = 0; i < polylines.length; i++) {
                polylines[i].setMap(null);
            }
            polylines = [];
        }

        function getBounds() {
            var response = {};
            if (map !== null) {
                var bounds = map.getBounds();
                if (bounds !== undefined) {
                    var ne = bounds.getNorthEast(),
                        sw = bounds.getSouthWest();

                    response = {
                        'north_east': [ne.lat(), ne.lng()],
                        'south_west': [sw.lat(), sw.lng()]
                    }
                }
            }
            return response;
        }
    </script>
</div>
