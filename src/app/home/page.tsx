import { TemplateDefault } from "@/components/template/TemplateDefault";
import { CarouselPlugin } from "./carousel/Carousel";
import { Videos } from "./videos/Videos";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import { About } from "./about/About";

export default function Home() {
  return (
    <TemplateDefault>
      {/* <h2 className="text-xl font-semibold text-slate-700">
        Principais destaques
      </h2>
      <CarouselPlugin /> */}
      <h2 className="text-xl font-semibold text-slate-700">
        Sobre o curso
      </h2>
      <div>
        <p className="text-slate-500">
          Este curso é um treinamento que tem como objetivo
          ensinar os conceitos básicos de programação para
          iniciantes. O curso será composto por módulos que
          abordarão temas específicos. 
        </p>
        <p className="text-slate-500">
          Aprender lógica de programação é fundamental 
          para o desenvolvimento de software porque fornece as bases para se criar, 
          analisar e resolver problemas computacionais de forma estruturada e eficiente.
        </p>
      </div>
      <Separator />
      <h2 className="text-xl font-semibold text-slate-700">
        Sobre mim
      </h2>
      <About />
      <Separator />
      <h2 className="text-xl font-semibold text-slate-700">
        Vídeos principais
      </h2>
      <Videos />
    </TemplateDefault>
  );
}
