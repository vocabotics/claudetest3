import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import TextVariations from '@/components/TextVariations';
import TextStyles from '@/components/TextStyles';
import InteractiveText from '@/components/InteractiveText';

function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={baseUrl}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/variations" element={<TextVariations />} />
            <Route path="/typography" element={<TextStyles />} />
            <Route path="/interactive" element={<InteractiveText />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;