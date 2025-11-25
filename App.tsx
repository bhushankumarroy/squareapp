import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import SiteMaps from './pages/SiteMaps';

// New Pages
import CompanyHistory from './pages/CompanyHistory';
import WordsOfVisionary from './pages/WordsOfVisionary';
import CoreManagement from './pages/CoreManagement';
import Award from './pages/Award';
import Quality from './pages/Quality';
import OtherVentures from './pages/OtherVentures';

// Gallery Pages
import MediaGallery from './pages/MediaGallery';
import VideoGallery from './pages/VideoGallery';

// Resource Pages
import EMICalculator from './pages/EMICalculator';
import Webmail from './pages/Webmail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          
          {/* Project Routes */}
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:category" element={<Projects />} />
          
          {/* Map Route */}
          <Route path="map" element={<SiteMaps />} />

          {/* Resource Routes */}
          <Route path="resource/emi-calculator" element={<EMICalculator />} />
          <Route path="resource/webmail" element={<Webmail />} />
          
          {/* Gallery Routes */}
          <Route path="gallery" element={<Gallery />} /> {/* Default to Photo Gallery */}
          <Route path="gallery/photos" element={<Gallery />} />
          <Route path="gallery/media" element={<MediaGallery />} />
          <Route path="gallery/videos" element={<VideoGallery />} />

          <Route path="contact" element={<Contact />} />
          
          {/* About Us Sub-pages */}
          <Route path="company-history" element={<CompanyHistory />} />
          <Route path="words-of-visionary" element={<WordsOfVisionary />} />
          <Route path="core-management" element={<CoreManagement />} />
          <Route path="awards" element={<Award />} />
          <Route path="quality" element={<Quality />} />
          <Route path="other-ventures" element={<OtherVentures />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
