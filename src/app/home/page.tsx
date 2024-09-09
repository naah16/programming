import { TemplateDefault } from "@/components/template/TemplateDefault";
import { CarouselPlugin } from "./carousel/Carousel";
import { Videos } from "./videos/Videos";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <TemplateDefault>
      <h2 className="text-xl font-semibold text-slate-700">
        Principais destaques
      </h2>
      <CarouselPlugin />
      <Separator />
      <h2 className="text-xl font-semibold text-slate-700">
        Vídeos principais
      </h2>
      <Videos />
    </TemplateDefault>
  );
}
