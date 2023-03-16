<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

interface StepFormInterface
{
    public function save();
}

class StepForm implements StepFormInterface
{
    private $step;
    private $data;

    public function __construct($step, $data)
    {
        $this->step = $step;
        $this->data = $data;
    }

    public function save()
    {
        $dom_xml = new DomDocument('1.0', 'UTF-8');
        $str = "<step{$this->step}>";
        foreach ($this->data as $item) {
            $str .= "<place>{$item}</place>";
        }
        $str .= "</step{$this->step}>";
        $dom_xml->loadXML('<?xml version="1.0" encoding="UTF-8"?>' . "\n" . $str);
        $dom_xml->save("step{$this->step}.xml");
    }
}

$step = 0;
$array = [];

if (isset($_POST['step'])) {
    $step = $_POST['step'];
}

if (isset($_POST['step'])) {
    foreach ($_POST['data'] as $item) {
        $array[] = $item;
    }
}

$stepCurrent = new StepForm($step, $array);
$stepCurrent->save();
