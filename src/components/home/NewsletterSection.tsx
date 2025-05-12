
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="bg-[#9B87F5] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-bold mb-6">Подпишитесь на рассылку</h2>
        <p className="text-white opacity-90 mb-6 max-w-xl mx-auto">
          Получайте уведомления о новых акциях, скидках и поступлениях товаров
        </p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Ваш email" 
            className="flex-grow rounded-l-md px-4 py-2 focus:outline-none"
          />
          <Button className="rounded-l-none bg-[#8B75E4] hover:bg-[#7A65D5]">
            Подписаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
