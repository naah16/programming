'use client'

import { usePathname } from "next/navigation";
import useFetch from "@/hooks/fetch";
import { Video } from "@/components/video/Video";
import { TemplatePlaylist } from "@/components/template/TemplatePlaylist";
import Link from "next/link";
import { ChevronLeft, CirclePlay } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoProps {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface Video {
  id: number;
  title: string;
  url: string;
  description: string;
}

const NavigationItems = ({ params }: { params: { id: number } }) => {
  const { data: moduleData } = useFetch(`https://backend-arduino-api.onrender.com/playlist/${params.id}`, true);
  const videos = moduleData?.videos || [];
  const pathname = usePathname();

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
              href={`/playlists/${params.id}/video/${video.id}`} // Mantendo o ID do vídeo na URL
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-slate-200",
                pathname.includes(`/playlists/${params.id}/video/${video.id}`) && "bg-slate-200"
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

export default function VideoPage({ params }: { params: { id: number } }) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/'); // Dividindo o pathname para pegar os parâmetros da URL
  const playlistId = pathSegments[2]; // Pegando o ID da playlist
  const videoId = pathSegments[4]; // Pegando o ID do vídeo

  // Buscar os dados da playlist específica
  const { data: playlistData, isLoading, error } = useFetch(`https://backend-arduino-api.onrender.com/playlist/${playlistId}`, true);

  if (error) {
    return (
      <TemplatePlaylist navigationItems={<NavigationItems params={params} />}>
        <p>Erro ao carregar os dados.</p>
      </TemplatePlaylist>    
    );
  } 

  if (isLoading) {
    return (
      <TemplatePlaylist navigationItems={<NavigationItems params={params} />}>
        <p>Carregando...</p>
      </TemplatePlaylist>
    );
  }

  // Encontrar o vídeo pelo videoId
  const video = playlistData?.videos.find((v: VideoProps) => v.id === Number(videoId));

  return (
    <TemplatePlaylist
      navigationItems={<NavigationItems params={params} />}
      className="text-slate-700"
    >
      {video ? (
        <>
          <h2 className="text-xl font-semibold">{video.title}</h2>
          <Video
            height="500"
            width="auto"
            src={video.url}
            title={video.title}
          />
          <h3 className="text-lg font-semibold">Descrição do vídeo:</h3>
          <p>{video.description}</p>
        </>
      ) : (
        <p>Vídeo não encontrado</p>
      )}
    </TemplatePlaylist>
  );
}
