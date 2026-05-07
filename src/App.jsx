import { Branding } from "./components/Branding";
import { BulletPoints } from "./components/BulletPoints";
import { CallToAction } from "./components/CallToAction";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Princing } from "./components/Princing";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Branding/>
      <Features/>
      <CallToAction/>
      <BulletPoints/>
      <Princing/>
      <CallToAction minify/>
      <Footer/>
    </>
  );
}

export default App;
