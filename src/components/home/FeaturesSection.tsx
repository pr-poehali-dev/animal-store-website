
import Icon from "@/components/ui/icon";

type FeatureType = {
  title: string;
  description: string;
  icon: string;
}

const features: FeatureType[] = [
  {
    title: "Быстрая доставка",
    description: "Доставляем заказы по всей России в кратчайшие сроки",
    icon: "Truck"
  },
  {
    title: "Качественные товары",
    description: "Работаем только с проверенными поставщиками и брендами",
    icon: "ShieldCheck"
  },
  {
    title: "Поддержка 24/7",
    description: "Наши специалисты всегда готовы ответить на ваши вопросы",
    icon: "HeartHandshake"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FDE1D3] flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="h-8 w-8 text-[#9B87F5]" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
