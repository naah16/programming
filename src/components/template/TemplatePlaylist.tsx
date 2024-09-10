'use client'

import { Navbar } from '@/components/navbar/Navbar';
import { cn } from '@/lib/utils';

export interface TemplatePlaylistProps {
  children: React.ReactNode;
  navigationItems: React.ReactNode;
  className?: string;
}

export const TemplatePlaylist = ({ children, navigationItems, className }: TemplatePlaylistProps) => {
  return (
    <div className={cn(className, "h-full")}>
      <Navbar
        navigationItems={navigationItems}
      >
        <div className="flex flex-col gap-4 p-4 pt-2">
          {children}
        </div>
      </Navbar>
    </div>
  );
}