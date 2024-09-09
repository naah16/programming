'use client'

import { Navbar } from '@/components/navbar/Navbar';

export interface TemplatePlaylistProps {
  children: React.ReactNode;
  navigationItems: React.ReactNode;
}

export const TemplatePlaylist = ({ children, navigationItems }: TemplatePlaylistProps) => {
  return (
    <div className="h-full">
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