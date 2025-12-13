import { HeroSection } from "@/components/features/home-page/HeroSection";
import { AboutSection } from "@/components/features/home-page/AboutSection";
import { TechStackSection } from "@/components/features/home-page/TechStackSection";
import { FeaturedProjects } from "@/components/features/home-page/FeaturedProjects";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-240 px-4 pt-24">
        <div className="@container">
          <HeroSection />
        </div>

        <AboutSection />

        <TechStackSection />

        <FeaturedProjects />
      </main>

      <div className="mx-auto max-w-240 px-4">
        <Footer />
      </div>
    </div>
  );
}
