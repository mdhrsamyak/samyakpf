import "./App.css";
import SplashCursor from "./components/SplashCursor";
import Contact from "./pages/Contact";

import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <>
      <div className="overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
        {/* <SplashCursor /> */}
        <Sidebar />
        <HomePage />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
