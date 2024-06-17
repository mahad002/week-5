import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';
import SixthSection from '../components/SixthSection';
import FooterSection from '../components/FooterSection';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="spacer h-16"></div>
        <Routes>
          <Route path="/mac" element={<FirstSection />} />
          <Route path="/iphone" element={<SecondSection />} />
          <Route path="/ipad" element={<ThirdSection />} />
          <Route path="/watch" element={<FourthSection />} />
          <Route path="/tv" element={<FifthSection />} />
          <Route path="/music" element={<SixthSection />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
};

export default App;
