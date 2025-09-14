import Header from "@/components/header";
import HomepageHero from "@/components/homepage-hero";
import HowItWorksSection from "@/components/how-it-works";
import FeaturesPageSection from "@/components/features-page";
import ContactSupport from "@/components/contact-support";
import AboutPage from "@/components/about-page";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero - Full screen with 3D model */}
        <section id="home" className="w-full h-screen">
          <HomepageHero />
        </section>

        {/* How it works */}
        <section id="how-it-works" className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
          <HowItWorksSection />
        </section>

        {/* Features */}
        <section id="features" className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
          <FeaturesPageSection />
        </section>

        {/* Trust/About snapshot */}
        <section id="about" className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
          <AboutPage compact />
        </section>

        {/* Contact & Support */}
        <section id="contact" className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
          <ContactSupport />
        </section>
      </main>

      <Footer />
    </div>
  );
}