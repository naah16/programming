import { TemplatePlaylist } from "@/components/template/TemplatePlaylist";

interface ModulosPageProps {
  params: {
    id: string;
  };
}

export default function ModulosPage({ params }: ModulosPageProps) {
  return (
    <TemplatePlaylist params={params}>
      <p>Módulo com o Id: {params.id}</p>
    </TemplatePlaylist>
  );
}