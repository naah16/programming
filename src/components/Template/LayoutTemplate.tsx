import { Navbar } from "@/components/Navbar";

interface LayoutTemplateProps {
  children: React.ReactNode;
}

export const LayoutTemplate = ({ children }: LayoutTemplateProps) => {
  return (
    <div className="h-full">
      <Navbar>
        {children}
      </Navbar>
    </div>
  );
};