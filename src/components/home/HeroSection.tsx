
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#E5DEFF] to-[#FDE1D3] py-14 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Всё для ваших любимых питомцев
          </h1>
          <p className="text-lg mb-6 text-gray-700 max-w-md">
            Широкий выбор товаров для собак, кошек и других домашних животных. Доставка по всей России.
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#9B87F5] hover:bg-[#8B75E4] text-white">
              Перейти в каталог
            </Button>
            <Button variant="outline" className="border-[#9B87F5] text-[#9B87F5] hover:bg-[#E5DEFF]">
              Акции месяца
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=800&auto=format" 
            alt="Счастливые питомцы" 
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
