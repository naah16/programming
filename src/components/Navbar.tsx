'use client'

import Link from "next/link"
import {
  UserRound,
  CircleHelp,
  CodeXml,
  Home,
  Menu,
  ListMusic,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { NavbarProps, NavigationItem } from "@/utils/interface";
import { cn } from "@/lib/utils";

const NavigationItems = () => {
  const pathname = usePathname();

	const navigator: NavigationItem[] = [
    {name: "Home", path: "/", icon: <Home className="h-4 w-4" />, enabled: true},
    {name: "Playlists", path: "/playlists", icon: <ListMusic className="h-4 w-4" />, enabled: false},
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
              `${!item.enabled ? "opacity-50" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-slate-200`
            )}
          >
            {item.icon} {item.name}
          </Link>
        );
      })}
    </>
  );
};

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <UserRound className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuItem>Ajuda</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <CodeXml className="h-6 w-6" />
              <span className="">Programação</span>
            </div>
          </div>
          <div className="flex-1">
            <nav className="grid gap-2 items-start px-2 text-sm font-medium lg:px-4">
              <NavigationItems />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex justify-between h-14 items-center gap-4 border-b bg-muted/40 px-4 bg-sky-600 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-4 text-lg font-medium">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <CodeXml className="h-6 w-6" />
                  <span className="">Programação</span>
                </div>
                <NavigationItems />
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex"></div>
          <UserMenu />
        </header>
        {children}
      </div>
    </div>
  );
};