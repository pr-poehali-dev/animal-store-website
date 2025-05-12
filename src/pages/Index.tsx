import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import PopularProductsSection from "@/components/home/PopularProductsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FC]">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <PopularProductsSection />
        <FeaturesSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
