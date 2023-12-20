import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";

import Contact from "./Pages/Contact";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
