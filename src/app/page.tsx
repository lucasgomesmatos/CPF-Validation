'use client';

import { BoxResult } from '@/components/box-result';
import { Footer } from '@/components/footer';
import { Form } from '@/components/form';
import { calculateDigitVerifier } from '@/utils/calculateDigitVerifier';
import { cleanCPF } from '@/utils/cleanCPF';

import { useEffect, useState } from 'react';

export default function Home() {
  const [value, setValue] = useState<string>('');
  const [checkValidCPF, setCheckValidCPF] = useState<boolean>(false);

  const cpf = cleanCPF(value);
  let cpfValidation = cpf.slice(0, 9);
  cpfValidation += calculateDigitVerifier(cpfValidation);
  cpfValidation += calculateDigitVerifier(cpfValidation);

  useEffect(() => {
    if (cpf === cpfValidation) setCheckValidCPF(true);
    else setCheckValidCPF(false);
  }, [cpf, cpfValidation]);

  const handleOnChange = (cpf: string) => {
    setValue(cpf);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="bg-zinc-900 h-screen overflow-hidden px-4 relative">
      <div className="bg-zinc-700 text-zinc-100 max-w-[1080px] mx-auto p-4 rounded-md mt-5">
        <h1 className="text-xl">Validador de CPF</h1>
        <div className="mt-1">
          <p className="text-sm text-zinc-300">
            Para verificar se um CPF é válido, informe o CPF no campo abaixo.
          </p>
          <Form
            value={value}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
          {value.length === 14 && <BoxResult validCPF={checkValidCPF} />}
        </div>
      </div>

      <div className="bg-zinc-700 text-zinc-100 max-w-[1080px] mx-auto p-4 rounded-md mt-5 ">
        <p>
          O objetivo do validador de CPF é auxiliar a estudantes,
          desenvolvedores e analistas nos testes de software em desenvolvimento.
          A má utilização é de responsabilidade exclusiva do usuário. O CPF
          (cadastro de pessoas físicas) é um registro mantido pela Receita
          Federal do Brasil no qual podem se inscrever pessoas de qualquer
          nacionalidade. O número é único para cada pessoa. O CPF é constituído
          de 11 dígitos dos quais os dois últimos são dídigos verificadores.
        </p>
      </div>
      <Footer />
    </main>
  );
}
