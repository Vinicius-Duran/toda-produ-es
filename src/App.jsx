import { useReveal } from "./hooks/useReveal.js";
import { useMetalShine } from "./hooks/useMetalShine.js";
import { whatsappLink } from "./data/site.js";
import { WhatsAppIcon } from "./components/icons.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Categories from "./components/Categories.jsx";
import Artists from "./components/Artists.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Experience from "./components/Experience.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useReveal();
  useMetalShine();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Categories />
        <Artists />
        <WhyUs />
        <Experience />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-ink-900 shadow-xl shadow-gold-600/30 transition-transform duration-300 hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
