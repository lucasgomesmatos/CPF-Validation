<?php

namespace App\Validation;

class CPF {

    /**
     * Método responsável por verificar se um CPF é realmente válido
     *
     * @param string $cpf
     * @return boolean
     */
    public static function validar($cpf) {

      
      // OBTÉM SOMENTE OS NÚMEROS
      $cpf = preg_replace('/\D/', '', $cpf);
      
      //VERIFICA A QUANTIDADE DE CARACTERES
      if(strlen($cpf) !== 11){
        return false;
      }

      // DÍGITO VERIFICADOR
      $cpfValidação = substr($cpf,0,9);
      $cpfValidação .= self::calcularDigitoVerificador($cpfValidação);
      $cpfValidação .= self::calcularDigitoVerificador($cpfValidação);

      //COMPARA O CPF CALCULADO COM O CPF ENVIADO
      return $cpfValidação == $cpf;
    }
 
    /**
     * Método responsável por calcular um dígito verificador com base em uma sequência númerica
     *
     * @param string $base
     * @return string
     */
    public static function calcularDigitoVerificador($base) {
      //AUXILIARES
      $tamanho = strlen($base);
      $multiplicador = $tamanho + 1;
      /*
        1x10 2x9 3x8 4x7 5x6 6x5 7x4 8x3 9x2
      */

      //SOMA
      $soma = 0;

      //ITERA OS NÚMEROS DO CPF 
      for($i = 0; $i < $tamanho; $i++){
        $soma += $base[$i] * $multiplicador;
        $multiplicador--;
      }

      //RESTO DA DIVISÃO 
      $resto = $soma % 11;

      // RETORNA O DÍGITO VERIFICADOR
      return $resto > 1 ? 11 - $resto : 0;
    }
}