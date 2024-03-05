import Image from "next/image";
import HeroSelection from "./components/HeroSelection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievement from "./components/Achievement";
 
export default function Home() {
  return (
    <main className="bg-[#121212] px-16 py-4 mx-auto w-full">
      <Navbar />
      <div className="container mt-24 mx-auto">
        <HeroSelection />
        <Achievement />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
