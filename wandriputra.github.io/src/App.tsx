import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/VSCodeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={
            <div className="font-mono text-sm">
                <span className="text-vscode-text-dim">/* Contact Form Styles */</span> <br/><br/>
                <span className="text-vscode-keyword">.contact-me</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-vscode-keyword">email</span>: <a href="mailto:hello@wandriputra.dev" className="text-vscode-string hover:underline">"hello@wandriputra.dev"</a>;<br/>
                &nbsp;&nbsp;<span className="text-vscode-keyword">linkedin</span>: <a href="https://linkedin.com/in/wandriputra" className="text-vscode-string hover:underline">"linkedin.com/in/wandriputra"</a>;<br/>
                &nbsp;&nbsp;<span className="text-vscode-keyword">github</span>: <a href="https://github.com/wandriputra" className="text-vscode-string hover:underline">"github.com/wandriputra"</a>;<br/>
                {'}'}
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
