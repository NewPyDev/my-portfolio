import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Gallery } from "@/components/sections/gallery"
import { BotDemo } from "@/components/sections/bot-demo"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

import { ScrollBackgroundProvider, SectionObserver } from "@/components/scroll-background"

export default function Home() {
  return (
    <ScrollBackgroundProvider>
      <main className="flex min-h-screen flex-col relative">
        <Navbar />
        <SectionObserver id="hero" className="w-full">
          <Hero />
        </SectionObserver>
        <SectionObserver id="about" className="w-full">
          <About />
        </SectionObserver>
        <SectionObserver id="gallery" className="w-full">
          <Gallery />
        </SectionObserver>
        <SectionObserver id="bot-demo" className="w-full">
          <BotDemo />
        </SectionObserver>
        <SectionObserver id="contact" className="w-full">
          <Contact />
        </SectionObserver>
        <div className="flex-1">
          {/* Further sections will go here */}
        </div>
        <Footer />
      </main>
    </ScrollBackgroundProvider>
  );
}
