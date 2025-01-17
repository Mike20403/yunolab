import Concerns from "./components/concerns/Concerns";
import Hero from "./components/hero/Hero";
import Treatments from "./components/treatments/Treatments";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero /> {/* Add Hero Section */}
      <Treatments /> {/* Add Treatment Section */}
      <Concerns />
      <Testimonials />
      <Footer />
    </div>
  );
}
