<?php

require __DIR__ ."/vendor/autoload.php";

use \App\Validation\CPF;

$resultado = CPF::validar(""); # Seu CPF

var_dump($resultado);