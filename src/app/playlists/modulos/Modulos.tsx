'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useFetch from "@/hooks/fetch";

export const Modulos = () => {
  const { data: playlists, error, isLoading } = useFetch(`https://backend-arduino-api.onrender.com/playlist`, true);

  const thumbnail = playlists?.map((playlist: any) => playlist.src);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Erro ao carregar os dados.</p>;

  return (
    <div className="flex flex-wrap gap-4">
      {playlists?.map((playlist: any) => (
        <Card
          key={playlist.id}
          className="relative max-w-[250px] overflow-hidden"
        >
          <div className="relative group">
            <CardContent className="p-0">
              <div className="w-full h-[200px] overflow-hidden bg-white">
                <Image
                  loader={() => thumbnail && thumbnail[playlist.id - 1]}
                  src={thumbnail && thumbnail[playlist.id - 1]}
                  alt={playlist.description}
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-full object-contain"
                  unoptimized={true}
                  priority={true}
                />
              </div>
            </CardContent>
            <CardFooter className="p-4 flex flex-col gap-1">
              <span className="text-sm font-semibold">Módulo {playlist.id}</span>
              <p className="text-sm">{playlist.description}</p>
            </CardFooter>
            <Link
              className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
              href={`/playlists/${playlist.id}`}
            >
              Assistir
              <Play className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};
