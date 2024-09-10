'use client'

import { TemplatePlaylist } from "@/components/template/TemplatePlaylist";
import useFetch from "@/hooks/fetch";
import { cn } from "@/lib/utils";
import { ChevronLeft, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Video } from "@/components/video/Video";
import { usePathname, useRouter } from "next/navigation";

interface Video {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface ModulosPageProps {
  params: {
    id: number;
  };
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
              href={`/playlists/${params.id}/video/${video.id}`}
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
  const { data: moduleData, isLoading, error } = useFetch(`https://backend-arduino-api.onrender.com/playlist/${params.id}`, true);
  const router = useRouter();

  if (error) {
    return (
      <TemplatePlaylist navigationItems={<NavigationItems params={params} />}>
        <p>Módulo não encontrado</p>
      </TemplatePlaylist>
    );
  }

  const videos = moduleData?.videos;

  if (!isLoading && videos) {
    router.replace(`/playlists/${params.id}/video/${videos[0].id}`);
    return null;
  }

  return (
    <TemplatePlaylist navigationItems={<NavigationItems params={params} />}>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <p>Nenhum vídeo encontrado</p>
      )}
    </TemplatePlaylist>
  );
}
