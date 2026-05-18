import { Router, useRouter } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

import "./App.css";

const PageRenderer = () => {
  const { page } = useRouter();

  if (page.startsWith("blog/")) {
    return <BlogPostPage slug={page.replace("blog/", "")} />;
  }

  const pages = {
    "": <HomePage />,
    home: <HomePage />,
    about: <AboutPage />,
    services: <ServicesPage />,
    gallery: <GalleryPage />,
    contact: <ContactPage />,
    blog: <BlogPage />,
  };

  return pages[page] || <HomePage />;
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <PageRenderer />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
