export const cleanCPF = (value: string) => {
  const reg = /\D/g;
  const cpf = value.replace(reg, '');

  return cpf;
};
