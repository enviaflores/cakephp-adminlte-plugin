<?php
App::uses('AppController', 'Controller');

class PurchasingRequestController extends AppController
{

    var $purchasing_request_response;

    var $continue;

    function beforeFilter()
    {
        parent::beforeFilter();
        $this->continue = TRUE;
        $this->purchasing_request_response = null;
    }

    function add()
    {
        $add_result_response = '';
        $this->viewClass = 'Json';

        switch (FALSE) {
            case $this->checking_assigned_department():
                break;
            case $this->checking_department_budget_to_proceed($this->request->data['NewPurchasingRequest']['amount'] * $this->request->data['NewPurchasingRequest']['quantity']):
                break;
        }

        $save_attachment = FALSE;

        if ($this->request->data['NewPurchasingRequest']['purchase_type'] == 'purchase') {
            $ops_controller = 'cpo/requests';
        } else {
            $ops_controller = 'cpo/service_requests';
            unset($this->request->data['NewPurchasingRequest']['name']);
            unset($this->request->data['NewPurchasingRequest']['quantity']);
            $save_attachment = TRUE;
        }

        if ($this->continue) {

            unset($this->request->data['NewPurchasingRequest']['purchase_type']);
            $this->request->data['NewPurchasingRequest']['requested_by'] = AuthComponent::user('User.id');
            $response = $this->Ops->Request($ops_controller, 'POST', 'json', null, $this->request->data['NewPurchasingRequest']);
            if ($response['response_code'] == 200) {
                $add_result_response = 'ok';
                $this->purchasing_request_response = 'La requisición se ha registrado correctamente';
                if ($save_attachment) {
                    $cpo_service_request_id = $response['data'];
                    $attachments = array();
                    foreach ($_FILES['data']['tmp_name'] as $_attachment)
                        if (! empty($_attachment))
                            $attachments[] = base64_encode(file_get_contents($_attachment));

                    $attachments_response = $this->Ops->Request('cpo/service_requests_attachment', 'POST', 'json', null, array(
                        'cpo_service_request_id' => $cpo_service_request_id,
                        'attachments' => $attachments
                    ));
                }
            } else {
                $add_result_response = 'fail';
                $this->purchasing_request_response = 'No se pudo registrar la información';
            }
        }

        $this->set(array(
            'result' => $add_result_response,
            'data' => $attachments_response,
            'params' => $this->request->data,
            'response' => $this->purchasing_request_response,
            '_serialize' => array(
                'result',
                'data',
                'response',
                'params'
            )
        ));
    }

    private function checking_assigned_department()
    {
        if ((int) AuthComponent::user('User.department_id') == 0) {
            $this->purchasing_request_response = 'Tu usuario no se encuentra asociado a ningún departamento. [' . AuthComponent::user('User.department_id') . '] Contacta a tu jefe directo';
            $this->continue = FALSE;
            return FALSE;
        }
        return TRUE;
    }

    private function checking_department_budget_to_proceed($request_amount)
    {
        $conditions = array(
            'CpoDepartmentBudget.from = ? AND CpoDepartmentBudget.to = ?' => array(
                date('Y-m-d', strtotime('first day of this month', time())),
                date('Y-m-d', strtotime('last day of this month', time()))
            )
        );
        $department_budget_data = $this->Ops->Request('cpo/departments/' . AuthComponent::user('User.department_id') . '/budgets', 'GET', 'json', null, array(
            'fields' => array(
                'CpoDepartmentBudget.id',
                'CpoDepartmentBudget.budget',
                'CpoDepartmentBudget.used_budget'
            ),
            'conditions' => $conditions
        ));

        if (! empty($department_budget_data[0]['budget'])) {
            $available_budget = ($department_budget_data[0]['budget'] - $department_budget_data[0]['used_budget']);
            if ($request_amount > $available_budget) {
                $this->purchasing_request_response = 'El monto de tu requisición excede el presupuesto disponible de tu departamento.';
                $this->continue = FALSE;
                return FALSE;
            }
            return TRUE;
        } else {
            $this->purchasing_request_response = 'No se encontraron presupuestos configurados para tu departamento del mes en curso';
            $this->continue = FALSE;
            return FALSE;
        }
    }
}