
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export type ProductType = {
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
}

type ProductCardProps = {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, image, price, oldPrice } = product;
  
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        {oldPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Скидка
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium mb-2 line-clamp-2 h-12">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-lg">{price}</span>
          {oldPrice && (
            <span className="text-gray-400 text-sm line-through">{oldPrice}</span>
          )}
        </div>
        <Button className="w-full mt-3 bg-[#9B87F5] hover:bg-[#8B75E4]">
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
