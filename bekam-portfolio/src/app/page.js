import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816]">
      <Navbar />

      <Hero />

      <Work />

      <TechStack />

      <About />

      <Experience />

      <Credentials />

      <Contact />

      <Footer />
    </main>
  );
}
