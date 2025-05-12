
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const SectionTitle = ({ children, className, centered = true }: SectionTitleProps) => {
  return (
    <h2 className={cn(
      "font-playfair text-3xl font-bold mb-8",
      centered && "text-center",
      className
    )}>
      {children}
    </h2>
  );
};

export default SectionTitle;
