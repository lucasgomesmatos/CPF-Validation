export const calculateDigitVerifier = (base: string) => {
  //AUXILIARES
  const size = base.length;
  let multiplier = size + 1;
  /*
    1x10 2x9 3x8 4x7 5x6 6x5 7x4 8x3 9x2
  */

  //SOMA
  let sumBase = 0;

  //ITERA OS NÚMEROS DO CPF
  for (let i = 0; i < size; i++) {
    sumBase += Number(base[i]) * multiplier;
    multiplier--;
  }

  //RESTO DA DIVISÃO
  const restSum = sumBase % 11;

  // RETORNA O DÍGITO VERIFICADOR
  return restSum > 1 ? 11 - restSum : 0;
};
