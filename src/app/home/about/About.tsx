import Image from "next/image";

export const About = () => {
  return (
    <figure className="md:flex items-center bg-slate-200 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <Image
        className="w-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="/img/user-photo.png"
        alt="Imagem de perfil"
        width={200}
        height={200}
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-slate-500 text-md font-medium">
            “Sou um Engenheiro de Computação apaixonado por tecnologia. Atuo na
            área de programação há mais de 2 anos e tenho experiência com
            diversas linguagens de programação.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-700">Fernando Victor</div>
          <div className="text-slate-700">Uberaba, MG</div>
        </figcaption>
      </div>
    </figure>
  );
};
