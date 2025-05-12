
import Icon from "@/components/ui/icon";

export type FeatureItemProps = {
  title: string;
  description: string;
  icon: string;
}

const FeatureItem = ({ title, description, icon }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#FDE1D3] flex items-center justify-center mb-4">
        <Icon name={icon} className="h-8 w-8 text-[#9B87F5]" />
      </div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureItem;
