import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-pitch-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}