import { maskCPF } from '@/utils/maskCPF';

interface FormProps {
  value: string;
  handleOnChange: (value: string) => void;
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ value, handleOnChange, handleOnSubmit }: FormProps) => {
  return (
    <div>
      <form
        className="max-[640px]:flex-col mt-8 flex gap-4"
        onSubmit={handleOnSubmit}
      >
        <input
          value={value}
          type="text"
          placeholder="Digite seu CPF"
          className="max-[640px]:w-full h-12 text-xl w-80 px-2 text-gray-200 border border-gray-900 rounded-lg bg-zinc-900 focus:ring-violet-900 focus:border-violet-900 outline-none focus:ring-1 placeholder:text-sm"
          maxLength={14}
          onChange={({ target }) => handleOnChange(maskCPF(target.value))}
        />
      </form>
    </div>
  );
};
