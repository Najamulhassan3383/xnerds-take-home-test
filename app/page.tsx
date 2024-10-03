import HeroSection from "@/components/sections/hero";
import SecondSection from "@/components/sections/section2";
import MarketingStrategySection from "@/components/sections/marketing";
import SeoOptimisationSection from "@/components/sections/seo";
import SocialFeed from "@/components/sections/socialFeed";
import Offerings from "@/components/sections/offering";
import ContactForm from "@/components/sections/contact";
import FAQSection from "@/components/sections/faqs";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <MarketingStrategySection />
      <SeoOptimisationSection />
      <SocialFeed />
      <Offerings />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
}
