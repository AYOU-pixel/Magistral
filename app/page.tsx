import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import LocationAndHours from "./components/LocationAndHours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * Testimonials and Gallery are the heaviest, most media-dense sections
 * and sit well below the fold. Code-splitting them keeps the initial
 * JS bundle lean and improves Time-to-Interactive without touching
 * their markup, copy, or logic.
 */
const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <SectionSkeleton />,
});

const Gallery = dynamic(() => import("./components/Gallery"), {
  loading: () => <SectionSkeleton />,
});

function SectionSkeleton() {
  return (
    <div
      className="mx-auto h-96 w-full max-w-7xl animate-pulse bg-bg-800 px-6 lg:px-8"
      aria-hidden="true"
    />
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Stats />
        <Pricing />
        <Testimonials />
        <Gallery />
        <LocationAndHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}