import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Play } from 'lucide-react';
import { playlists } from "@/app/playlists/data";
import Link from "next/link";
import Image from "next/image";

export const Modulos = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {playlists.map((playlist) => (
        <Card
          key={playlist.id}
          className="relative max-w-[250px] overflow-hidden"
        >
          <div className="relative group">
            <CardContent className="p-0">
              <Image
                src={playlist.src}
                alt={playlist.description}
                width={400}
                height={200}
                className="rounded-t-lg"
              />
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
