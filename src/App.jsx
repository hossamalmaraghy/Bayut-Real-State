import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import AuthPage from "./pages/AuthPage";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={5000} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full overflow-hidden">
              <Header />
              <About />
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;
