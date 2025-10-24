import Hero from "../components/hero";
import Services from "../components/services";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}