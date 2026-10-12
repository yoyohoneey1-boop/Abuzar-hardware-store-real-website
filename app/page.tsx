import { ScrollSequenceBackground } from "@/components/scroll-animation/scroll-sequence-background"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { IntroSection } from "@/components/sections/intro-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section"
import { ProductGridSection } from "@/components/sections/product-grid-section"
import { MaterialsSection } from "@/components/sections/materials-section"
import { EngineeringSection } from "@/components/sections/engineering-section"
import { ApplicationsSection } from "@/components/sections/applications-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"
import { ShopifyProducts } from "@/components/integrations/shopify-products"
import { AIChatbot } from "@/components/integrations/ai-chatbot"

export default function Home() {
  return (
    <>
      <ScrollSequenceBackground />
      <div className="scroll-animation-content">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <CategoriesSection />
        <ProductShowcaseSection />
        <ProductGridSection />
        <MaterialsSection />
        <EngineeringSection />
        <ApplicationsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <ShopifyProducts />
      </main>
      <FooterSection />
      <AIChatbot />
      </div>
    </>
  )
}
