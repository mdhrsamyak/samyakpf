import "./App.css";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <HomePage />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
