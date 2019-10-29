<?php
ob_start();

echo $this->Form->create('NewPurchasingRequest');

echo $this->Form->input('purchase_type', [
    'label' => __('Tipo de Requisición'),
    'type' => 'select',
    'options' => array(
        'purchase' => 'Compra',
        'service' => 'Servicio'
    ),
    'value' => '',
    'autocomplete' => 'off'
]);

$this->Html->divStart(array(
    'id' => 'form_container',
    'style' => 'display:none'
));

// common fields
echo $this->Form->input('supplier_id', [
    'label' => __('Proveedor'),
    'type' => 'select',
    'options' => $suppliers_list + array(
        '0' => 'Otro'
    ),
    'value' => ''
]);

echo $this->Form->input('another_supplier', array(
    'type' => 'text',
    'label' => _('Especifica el proveedor')
));

echo $this->Form->input('amount', array(
    'type' => 'number',
    'label' => _('Costo unitario'),
    'class' => 'form-control'
));

echo $this->Form->input('comments', array(
    'type' => 'textarea',
    'label' => _('Motivo de la compra o servicio')
));

// purchase
$this->Html->divStart(array(
    'id' => 'purchase_container',
    'style' => 'display:none'
));
echo $this->Form->input('name', array(
    'type' => 'text',
    'label' => _('Concepto')
));

echo $this->Form->input('quantity', array(
    'type' => 'number',
    'label' => _('Cantidad'),
    'class' => 'form-control'
));
$this->Html->divEnd();

// SERVICE
$this->Html->divStart(array(
    'id' => 'service_container',
    'style' => 'display:none'
));
echo $this->Form->input('service_id', [
    'label' => __('Servicio'),
    'type' => 'select',
    'options' => $services_list,
    'value' => ''
]);

echo $this->Form->inputRow('<label>Cotizaciones del servicio</label>');
echo $this->Form->inputRow($this->Form->input('attachment_1', [
    'label' => false,
    'type' => 'file',
    "accept" => "application/pdf"
]), $this->Form->input('attachment_2', [
    'label' => false,
    'type' => 'file',
    "accept" => "application/pdf"
]), $this->Form->input('attachment_3', [
    'label' => false,
    'type' => 'file',
    "accept" => "application/pdf"
]));

$this->Html->divEnd();

$this->Html->divEnd();

$this->Html->dialog('purchasingRequest', [
    'dialog-header' => __('Requisición de Compra') . '&nbsp;<strong></strong>',
    'dialog-content' => ob_get_clean(),
    'save-btn-label' => 'Guardar',
    'close-btn-label' => 'Cancelar',
    'dialog-footer' => ''
]);