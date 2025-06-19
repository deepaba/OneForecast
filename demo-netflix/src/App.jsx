import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
       <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;