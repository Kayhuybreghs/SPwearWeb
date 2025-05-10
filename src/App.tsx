import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { ScrollToTop } from './utils/ScrollToTop';
import AnimatedBackground from './components/ui/AnimatedBackground';
import { Analytics } from '@vercel/analytics/react'; // ✅ Import Analytics
import './App.css';

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projecten" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* ✅ Analytics component */}
      <Analytics />
    </>
  );
}

export default App;
