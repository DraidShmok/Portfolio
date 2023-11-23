import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Clock from "./components/Clock/clock";
import VoiceConverter from "./components/Converter/converter";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Clock />
        <VoiceConverter />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
