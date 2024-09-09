'use client'

import {
  UserRound,
  CodeXml,
  Menu,
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
import { useRouter } from "next/navigation";
import { NavbarProps } from "@/utils/interface/interface";
import { Leftbar, LeftbarContent, LeftbarHeader, LeftbarTitle } from "./Leftbar";
import { Header } from "./Header";

const MenuMobile = ({ navigationItems } : { navigationItems: React.ReactNode}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
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
          {navigationItems}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

const MenuDefault = () => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon" className="rounded-full bg-slate-600 hover:bg-slate-700">
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
        <DropdownMenuItem
          onClick={() => {
            router.push("/login");
          }}
        >
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Navbar = ({ children, navigationItems }: NavbarProps) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Leftbar>
          <LeftbarHeader>
            <LeftbarTitle>
              <CodeXml className="h-6 w-6" />
              <span>Programação</span>
            </LeftbarTitle>
          </LeftbarHeader>
          <LeftbarContent>
            {navigationItems}
          </LeftbarContent>
        </Leftbar>
      </div>
      <div className="flex flex-col">
        <Header>
          <MenuMobile navigationItems={navigationItems} />
          <div className="flex"></div>
          <MenuDefault />
        </Header>
        {children}
      </div>
    </div>
  );
};
