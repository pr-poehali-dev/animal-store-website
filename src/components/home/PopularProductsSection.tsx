
import { Button } from "@/components/ui/button";
import ProductCard, { ProductType } from "./ProductCard";

const popularProducts: ProductType[] = [
  {
    name: "Корм Royal Canin для взрослых собак",
    image: "https://images.unsplash.com/photo-1589924691045-160732efd1a5?q=80&w=300&auto=format",
    price: "3 200 ₽",
    oldPrice: "3 600 ₽"
  },
  {
    name: "Игрушка-удочка для кошек",
    image: "https://images.unsplash.com/photo-1604542031658-5799ca5d7936?q=80&w=300&auto=format",
    price: "590 ₽"
  },
  {
    name: "Лежанка для кошек и собак",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=300&auto=format",
    price: "2 450 ₽",
    oldPrice: "2 800 ₽"
  },
  {
    name: "Когтеточка напольная",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=300&auto=format",
    price: "1 850 ₽"
  }
];

const PopularProductsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Популярные товары</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-[#9B87F5] text-[#9B87F5] hover:bg-[#E5DEFF]">
            Смотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
