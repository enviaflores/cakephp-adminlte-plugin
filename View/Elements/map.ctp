<?= $this->Html->contentBlockStart([
    'header' => [
        'title' => 'Map',
        'icon' => 'th',
        'border' => true
    ],
    'box-tools' => [
        'label' => 'map',
        'collapsable' => true,
        'remove' => true
    ]
]) ?>
<div>
    <div class="embed-responsive embed-responsive-4by3">
        <div id="map" class="embed-responsive-item"></div>
    </div>
</div>
<?= $this->Html->contentBlockEnd() ?>