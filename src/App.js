import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import MembersPage from './Pages/MembersPage';
import EventsPage from './Pages/EventsPage';
import PublicationsPage from './Pages/PublicationsPage';
import InterviewsPage from './Pages/InterviewsPage';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: '1' }}>
        <Navbar />
          {/* <Header /> */}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/interviews" element={<InterviewsPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
