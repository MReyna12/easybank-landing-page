import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Articles from "../components/Articles";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Services />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
