import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <nav className="nav-list" aria-label="Primary navigation">
          <NavLink className="nav-btn" to="/">About</NavLink>
          <NavLink className="nav-btn" to="/resume">Resume</NavLink>
          <NavLink className="nav-btn" to="/portfolio">Portfolio</NavLink>
          <NavLink className="nav-btn" to="/blog">Blog</NavLink>
          <NavLink className="nav-btn" to="/contact">Contact</NavLink>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Layout>
    </HashRouter>
  );
}