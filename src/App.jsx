import { useState } from 'react';
import Layout from './components/Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const pages = {
    about: About,
    resume: Resume,
    portfolio: Portfolio,
    blog: Blog,
    contact: Contact,
  };
  const ActivePage = pages[activeTab];

  return (
    <Layout>
      <nav className="nav-list" aria-label="Primary navigation">
        {[
          ['about', 'About'],
          ['resume', 'Resume'],
          ['portfolio', 'Portfolio'],
          ['blog', 'Blog'],
          ['contact', 'Contact'],
        ].map(([tab, label]) => (
          <button
            className={`nav-btn${activeTab === tab ? ' active' : ''}`}
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-current={activeTab === tab ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>

      <main className="main-content">
        <ActivePage />
      </main>
    </Layout>
  );
}