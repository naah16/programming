
import { LayoutTemplate } from "@/components/Template/LayoutTemplate";
import { CarouselPlugin } from "./carousel/Carousel";
import { Videos } from "./videos/Videos";

export default function Home() {
  return (
    <LayoutTemplate>
      <div className="flex flex-col p-4 pt-2">
        <h2 className="text-xl font-semibold text-slate-700">
          Principais destaques
        </h2>
        <CarouselPlugin />
        <h2 className="text-xl font-semibold text-slate-700 mb-4">
          Vídeos principais
        </h2>
        <Videos />
      </div>
    </LayoutTemplate>
  );
}
