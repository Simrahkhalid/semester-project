// include modules
import { Routes, Route, Navigate } from 'react-router-dom';

// import views and common components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './views/home/Home';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import WIE from './views/wie/WIE';
import WieTeam from './views/wie-team/WieTeam';
import OurTeam from './views/our-team/OurTeam';
import OurTeamDetails from './views/our-team-details/OurTeamDetails';
import Events from './views/events/Events';
import EventDetails from './views/event-details/EventDetails';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventName" element={<EventDetails />} />
        <Route path="/wie" element={<WIE />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-team/:tenure" element={<OurTeamDetails />} />
        <Route path="/wie/team" element={<WieTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}
