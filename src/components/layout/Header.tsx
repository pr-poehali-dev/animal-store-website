
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Paw" className="h-8 w-8 text-[#9B87F5]" />
          <span className="font-bold text-2xl">ЗооДруг</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-[#9B87F5] transition-colors">Каталог</a>
          <a href="#" className="text-gray-700 hover:text-[#9B87F5] transition-colors">Акции</a>
          <a href="#" className="text-gray-700 hover:text-[#9B87F5] transition-colors">О нас</a>
          <a href="#" className="text-gray-700 hover:text-[#9B87F5] transition-colors">Контакты</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingCart" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
