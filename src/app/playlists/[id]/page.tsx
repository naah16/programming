'use client'

import { TemplatePlaylist } from "@/components/template/TemplatePlaylist";
import useFetch from "@/hooks/fetch";
import { cn } from "@/lib/utils";
import { ChevronLeft, CirclePlay } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Video } from "@/components/video/Video";

interface Video {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface ModulosPageProps {
  params: {
    id: string;
  };
}

interface VideoProps {
  id: number;
  title: string;
  url: string;
  description: string;
}

const NavigationItems = ({ params }: { params: { id: string} }) => {
  const pathname = usePathname();

  const { data: moduleData } = useFetch(`http://localhost:8080/playlists/${params.id}`, true);

  const videos = moduleData?.videos || [];

  return (
    <>
      <Link
        href={"/playlists"}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-slate-200"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Voltar</span>
      </Link>
      <h2 className="my-2 px-4 text-lg font-semibold tracking-tight">
        Vídeos do módulo {params.id}
      </h2>
      <ul className="flex flex-col gap-2">
        {videos.map((video: Video) => (
          <li key={video.id}>
            <Link
              href="#"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-slate-200",
                pathname === `/playlists/${params.id}/video/${video.id}` && "bg-slate-200"
              )}
            >
              <CirclePlay className="w-5 h-5" />
              <span>{video.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default function ModulosPage({ params }: ModulosPageProps) {
  const { data: moduleData, isLoading, error } = useFetch(`http://localhost:8080/playlists/${params.id}`, true);
  const videos = moduleData?.videos.find((video: VideoProps) => video.id === Number(params.id));

  if (error) {
    return(
      <TemplatePlaylist navigationItems={<NavigationItems params={params} />}>
        <p>Módulo não encontrado</p>
      </TemplatePlaylist>
    );
  }

  return (
    <TemplatePlaylist navigationItems={<NavigationItems params={params} />}>
      {isLoading 
        ? <p>Carregando...</p>
        : <>
          <p>Módulo com o Id: {params.id}</p>
          <h1>{videos?.title}</h1>
          <Video
            height={"500"}
            width={"auto"}
            src={videos?.url} 
            title={videos?.title}
          />
          <h3 className="text-xl font-semibold">Descrição do vídeo:</h3>
          <p>{videos?.description}</p>
        </>
      }
    </TemplatePlaylist>
  );
}
