export interface NavigationItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
  enabled?: boolean;
}

export interface NavbarProps {
  children: React.ReactNode;
  navigationItems: React.ReactNode;
}

export interface VideoProps {
  src: string;
  width: number | string;
  height: number | string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}
