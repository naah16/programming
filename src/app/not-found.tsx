import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-wrap h-full items-center justify-evenly container bg-[#f8fafc]">
      <div className="flex flex-col items-center gap-2 text-center text-slate-700 max-w-[475px] lg:text-start lg:items-start">
        <span className="text-9xl font-bold text-orange-400">404</span>
        <span className="text-5xl">Isso é um erro</span>
        <p className="text-xl">Não conseguimos encontrar a página que você solicitou</p>
        <Link
          href={"/home"}
          className="flex gap-1 items-center justify-center rounded-lg py-2 px-4 max-w-fit bg-slate-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar para o menu principal
        </Link>
      </div>
      <div>
        <Image
          src="/img/404.svg" 
          alt="Página não econtrada"
          width={600} 
          height={400}
        />
      </div>
    </div>
  );
}