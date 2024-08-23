'use client'

import { NavigationItem } from '@/utils/interface/interface';
import { Navbar } from '@/components/navbar/Navbar';
import { usePathname } from 'next/navigation';
import { ChevronLeft, CirclePlay } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface TemplatePlaylistProps {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

const NavigationItems = ({ params }: { params: { id: string} }) => {
  const pathname = usePathname();

	const navigator: NavigationItem[] = [
    {name: "Vídeo 1", path: "#", icon: <CirclePlay className='w-4 h-4' /> , enabled: true},
    {name: "Vídeo 2", path: "#", icon: <CirclePlay className='w-4 h-4' />, enabled: true},
    {name: "Vídeo 3", path: "#", icon: <CirclePlay className='w-4 h-4' />, enabled: true},
  ];

  return (
    <>
      <Link 
        href={"/playlists"} 
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-slate-200"
      >
        <ChevronLeft className='w-5 h-5' />
        <span>Voltar</span>
      </Link>
      <h2 className="my-2 px-4 text-lg font-semibold tracking-tight">Vídeos do módulo {params.id}</h2>
      {navigator.map((item) => {
        const selected = pathname.startsWith(item.path);
        return (
          <Link
            key={item.name}
            href={
              item.enabled
                ? item.path
                : "#" // Disabled link
            }
            className={cn(
              selected
                ? "text-primary bg-slate-200"
                : "text-muted-foreground hover:bg-slate-200",
              !item.enabled 
                ? "opacity-50 hover:!bg-transparent hover:cursor-default"
                : "",
              "flex items-center gap-3 border-l-4 px-3 py-2 text-muted-foreground transition-all hover:rounded-lg hover:bg-slate-200"
            )}
          >
            {item.icon} {item.name}
          </Link>
        );
      })}
    </>
  );
};

export const TemplatePlaylist = ({ children, params }: TemplatePlaylistProps) => {
  return (
    <div className="h-full">
      <Navbar
        navigationItems={<NavigationItems params={params} />}
      >
        <div className="flex flex-col gap-4 p-4 pt-2">
          {children}
        </div>
      </Navbar>
    </div>
  );
}