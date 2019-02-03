<?= $this->Html->contentBlockStart([
    'header' => [
        'title' => 'Map debugger',
        'icon' => 'th',
        'border' => true
    ],
    'box-tools' => [
        'label' => 'debugger',
        'collapsable' => true,
        'remove' => true
    ]
]) ?>
<div>
    <?= $this->Form->inputRow($this->Form->input('url', [
            'label' => 'GeoJson URL',
            'autofocus' => true
        ]),
        '<br><button id="get_geojson" class="btn btn-info form-control">'.__('Get and Draw').'</button>'
    ); ?>
    <?= $this->Form->inputRow(
        $this->Form->input('geojson', [
            'label' => 'Or paste the GeoJson here',
            'type' => 'textarea',
            'rows' => 15
        ])
    ); ?>
</div>
<?= $this->Html->contentBlockEnd() ?>
