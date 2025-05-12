
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Container = ({ 
  children, 
  className, 
  as: Component = "div" 
}: ContainerProps) => {
  return (
    <Component className={cn("container mx-auto px-4", className)}>
      {children}
    </Component>
  );
};

export default Container;
