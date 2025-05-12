
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FC]">
      {/* Header */}
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

      <main className="flex-grow">
        {/* Hero section */}
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

        {/* Categories section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Каталог категорий</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "Для собак", icon: "Dog" },
                { name: "Для кошек", icon: "Cat" },
                { name: "Для птиц", icon: "Bird" },
                { name: "Для грызунов", icon: "Mouse" }
              ].map((category, index) => (
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

        {/* Popular products */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Популярные товары</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((product, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.oldPrice && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Скидка
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2 line-clamp-2 h-12">{product.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-lg">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 text-sm line-through">{product.oldPrice}</span>
                      )}
                    </div>
                    <Button className="w-full mt-3 bg-[#9B87F5] hover:bg-[#8B75E4]">
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[#9B87F5] text-[#9B87F5] hover:bg-[#E5DEFF]">
                Смотреть все товары
              </Button>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
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
              ].map((feature, index) => (
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

        {/* CTA section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Paw" className="h-6 w-6 text-[#9B87F5]" />
                <span className="font-bold text-xl text-white">ЗооДруг</span>
              </div>
              <p className="text-gray-400">
                Ваш надежный помощник в выборе товаров для домашних животных
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Категории</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для собак</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для кошек</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для птиц</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для грызунов</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Возврат и обмен</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4 text-[#9B87F5]" />
                  <span>г. Москва, ул. Примерная, 123</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-[#9B87F5]" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-[#9B87F5]" />
                  <span>info@zoofriend.ru</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 ЗооДруг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
