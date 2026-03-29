import { cn } from "@/lib/utils";
import prorastroIcon from "@/assets/prorastro-icon.png";

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <img 
      src={prorastroIcon} 
      alt="ProRastro" 
      className={cn("object-contain", className)} 
    />
  );
};
