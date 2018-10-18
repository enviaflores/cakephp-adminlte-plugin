<div>
    <div class="embed-responsive embed-responsive-4by3">
        <div id="map" class="embed-responsive-item"></div>
    </div>
    <?= $this->Html->script('AdminLTE.jQuery/jQuery-2.2.4') ?>
    <?= $this->Html->script('https://js.pusher.com/4.3/pusher.min.js') ?>
    <?= $this->Html->script("https://maps.googleapis.com/maps/api/js?key={$google_maps_key}&libraries=visualization") ?>
    <script>
        var m_markers = JSON.parse('<?= json_encode($map_options['markers']) ?>');
        var m_layer = JSON.parse('<?= json_encode($map_options['layer']) ?>');
        var polylines = [];
        var markers = [];
        var map = null;

        $(document).ready(function () {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: <?= $map_options['center']['latitude'] ?>, lng: <?= $map_options['center']['longitude'] ?>},
                zoom: <?= $map_options['zoom'] ?>,
                mapTypeId: '<?= $map_options['type'] ?>'
            });

            if (typeof m_layer.type !== 'undefined') {
                switch (m_layer.type) {
                    case 'heatmap':
                        var m_data = [];

                        $.each(m_layer.data, function (index, value) {
                            m_data.push(new google.maps.LatLng(value[0], value[1]))
                        });

                        var heatmap = new google.maps.visualization.HeatmapLayer({
                            data: m_data
                        });
                        heatmap.setMap(map);
                        break;
                    case 'traffic':
                        var trafficLayer = new google.maps.TrafficLayer();
                        trafficLayer.setMap(map);
                        break;
                    default:
                        break;
                }
            }

            $.each(m_markers, function (index, value) {

                // We need at least the position for the marker
                if (typeof value.position !== 'undefined') {
                    var options = {
                        'position': new google.maps.LatLng(value.position[0], value.position[1]),
                        'map': map
                    };
                    if (typeof value.label !== 'undefined') {
                        options['label'] = value.label;
                    }
                    if (typeof value.title !== 'undefined') {
                        options['title'] = value.title;
                    }
                    var marker = new google.maps.Marker(options);
                    markers.push(marker);
                }
            });

            // Enable pusher logging - don't include this in production
            Pusher.logToConsole = <?= ((Configure::read('debug') > 0) ? 'true' : 'false') ?>;

            var pusher = new Pusher('<?= $pusher_key ?>', {
                cluster: '<?= $pusher_cluster ?>',
                forceTLS: true
            });

            var channel = pusher.subscribe('my-channel');
            channel.bind('my-event', function(data) {

                json = JSON.parse(data.payload);
                if (json.type === 'FeatureCollection') {

                    clearMapObjects();

                    $.each(json.features, function (index, value) {

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
            });
        });

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
