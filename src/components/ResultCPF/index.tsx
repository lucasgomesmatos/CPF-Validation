import { Info } from '@phosphor-icons/react';

interface ResultCPFProps {
  validCPF: boolean;
}

export const ResultCPF = ({ validCPF }: ResultCPFProps) => {
  return (
    <div>
      {validCPF ? (
        <div className="max-[640px]:w-full flex gap-2 items-center mt-4 bg-green-700 rounded p-2 w-80">
          <Info size={24} />O CPF é válido
        </div>
      ) : (
        <div className="max-[640px]:w-full flex gap-2 items-center mt-4 bg-red-700 rounded p-2 w-80">
          <Info size={24} />O CPF é inválido
        </div>
      )}
    </div>
  );
};
