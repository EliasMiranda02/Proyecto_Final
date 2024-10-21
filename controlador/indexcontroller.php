<?php
include_once("modelo/indexmodel.php");
class IndexController{
    private $indexModel;
    //Constructor
    public function __construct()
    {
        $this->indexModel = new IndexModel();
    }
    public static function index(){
        require_once("vista/home.php"); //PERMITIR DESPLEGAR LA VISTA
    }
}
?>