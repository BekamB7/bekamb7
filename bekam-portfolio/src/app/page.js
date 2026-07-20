import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/clients";
import Work from "@/components/Work";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black noise">
      <Navbar />
      <Hero />
      <Clients />
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