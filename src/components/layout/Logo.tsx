
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ 
  className, 
  iconClassName, 
  textClassName, 
  size = "md" 
}: LogoProps) => {
  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10"
  };
  
  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Icon 
        name="Paw" 
        className={cn("text-[#9B87F5]", iconSizes[size], iconClassName)} 
      />
      <span className={cn("font-bold", textSizes[size], textClassName)}>
        ЗооДруг
      </span>
    </div>
  );
};

export default Logo;
