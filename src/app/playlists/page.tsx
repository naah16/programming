import { TemplateDefault } from "@/components/template/TemplateDefault";
import { Modulos } from "./modulos/Modulos";


export default function Playlists() {
  return (
    <TemplateDefault>
      <h2 className="text-xl font-semibold text-slate-700">
        Playlists
      </h2>
      <Modulos />
    </TemplateDefault>
  );
}
