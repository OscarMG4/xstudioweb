import { SobreNosotros } from "./components/SobreNosotros";
//import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
//import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Contacto } from "./components/Contacto";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { NuestrosServicios } from "./components/NuestrosServicios";
import { Sponsors } from "./components/Sponsors";
//import { Team } from "./components/Team";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <SobreNosotros />
      {/* <HowItWorks /> */}
      <Features />
      {/* <Cta /> */}
      <NuestrosServicios />
      {/* <Team /> */}
      <Pricing />
      <Contacto />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
