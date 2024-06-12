import Canister from "./components/Canister";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <Roadmap />
      <Feature />
      <Canister />
      <Partners />
      <Footer />
    </>
  );
}
