
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

type CategoryItem = {
  name: string;
  icon: string;
}

const categories: CategoryItem[] = [
  { name: "Для собак", icon: "Dog" },
  { name: "Для кошек", icon: "Cat" },
  { name: "Для птиц", icon: "Bird" },
  { name: "Для грызунов", icon: "Mouse" }
];

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Каталог категорий</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#E5DEFF] flex items-center justify-center mb-4 group-hover:bg-[#9B87F5] transition-colors">
                  <Icon name={category.icon} className="h-8 w-8 text-[#9B87F5] group-hover:text-white" />
                </div>
                <h3 className="font-medium text-lg">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
