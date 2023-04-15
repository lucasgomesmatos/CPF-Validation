import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export const Footer = () => {
  return (
    <>
      <footer className="max-[375px]:invisible max-[640px]:flex-col flex gap-2 items-center justify-center w-full absolute bottom-1 text-center text-zinc-400 px-4">
        <p className="text-sm max-[400px]:text-xs max-[400px]:w-52 max-[640px]:w-80">
          {`© Todos os direitos reservados | feito com ❤️ por Lucas Gomes Matos
          ${new Date().getFullYear()}.`}
        </p>
        <p className="hover:text-zinc-50 cursor-pointer">
          <a
            href="https://github.com/lucasgomesmatos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={20} />
          </a>
        </p>
        <p className="hover:text-zinc-50 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/lucas-gomes-matos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={20} />
          </a>
        </p>
      </footer>
    </>
  );
};
