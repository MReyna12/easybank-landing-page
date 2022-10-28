import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Articles from "../components/Articles";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
