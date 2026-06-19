import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main className="overflow-x-hidden pb-4">
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
