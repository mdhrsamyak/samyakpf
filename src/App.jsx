import "./App.css";
import SnakeGame from "./components/SnakeGame";
import SplashCursor from "./components/SplashCursor";
import Contact from "./pages/Contact";

import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Sidebar from "./pages/Sidebar";
import Skills from "./pages/Skills";

function App() {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  // window.addEventListener("keydown", (e) => {
  //   if (
  //     e.key === "F12" ||
  //     (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
  //     (e.ctrlKey && e.key === "U")
  //   ) {
  //     e.preventDefault();
  //   }
  // });
  return (
    <>
      <div className="overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
        {/* <SplashCursor /> */}
        <Sidebar />
        <HomePage />
        <Projects />
        <Skills />
        {/* <SnakeGame /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
