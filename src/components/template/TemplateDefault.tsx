'use client'

import { Navbar } from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/utils/interface/interface";
import { CircleHelp, Home, ListMusic } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TemplateDefaultProps {
  children: React.ReactNode;
}

const NavigationItems = () => {
  const pathname = usePathname();

	const navigator: NavigationItem[] = [
    {name: "Home", path: "/home", icon: <Home className="h-4 w-4" />, enabled: true},
    {name: "Playlists", path: "/playlists", icon: <ListMusic className="h-4 w-4" />, enabled: true},
    {name: "Ajuda", path: "/ajuda", icon: <CircleHelp className="h-4 w-4" />, enabled: false},
  ];

  return (
    <>
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
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-slate-200"
            )}
          >
            {item.icon} {item.name}
          </Link>
        );
      })}
    </>
  );
};

export const TemplateDefault = ({ children }: TemplateDefaultProps) => {
  return (
    <div className="h-full">
      <Navbar
        navigationItems={<NavigationItems />}
      >
        <div className="flex flex-col gap-4 p-4 pt-2">
          {children}
        </div>
      </Navbar>
    </div>
  );
};