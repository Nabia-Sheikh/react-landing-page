import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Team from "./components/Team";

function App() {
    let backtotop = document.getElementById("#back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Service />
        <CallToAction />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
