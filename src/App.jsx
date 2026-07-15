import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import ReactGA from "react-ga4";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectsList from "./components/ProjectsList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import WorksList from "./components/WorksList";

const GA_MEASUREMENT_ID = "G-LJPFQT48Z3";

if (import.meta.env.PROD) {
  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gtagOptions: {
      send_page_view: false,
    },
  });
}

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!import.meta.env.PROD) {
      return;
    }

    ReactGA.send({
      hitType: "pageview",
      page: `${location.pathname}${location.search}`,
      title: document.title,
    });
  }, [location]);

  return null;
}

function NotFound() {
  return (
    <div className="containerSide notFound">
      <div className="notFoundContent">
        <p className="sectionKicker">404 error</p>
        <h2>Page not found</h2>
        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link className="projectAction notFoundAction" to="/">
          Back to About
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Header />
      <div className="mainContainer">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/works" element={<WorksList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
