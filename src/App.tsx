import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { EventProvider } from './context/EventContext';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <Router>
      <EventProvider>
        <ModalProvider>
          <div className="flex min-h-screen flex-col bg-neutral-50">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ModalProvider>
      </EventProvider>
    </Router>
  );
}

export default App