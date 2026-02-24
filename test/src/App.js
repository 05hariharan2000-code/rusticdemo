import logo from './logo.svg';
import './App.css';
import './pages/Homepage.css';
import Homepage from './pages/Homepage';
import Footer from './component/Footer';
import Heropage from './pages/Heropage';
import './pages/Herosection.css';
import Sevices from './pages/Sevices';
import './pages/Services.css';
import Aboutus from './pages/Aboutus';
import './pages/Aboutus.css'
import Project from './pages/Project';
import './pages/Project.css';
import Teams from './pages/Teams';
import './pages/Teams.css';
import Premium from './pages/Premium';
import "./pages/Premium.css";
import Testimonial from './pages/Testimonial';
import "./pages/Testimonial.css";
import Contact from './pages/Contact';
import "./pages/Contact.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (

    <div>
          <BrowserRouter>
           <Homepage />
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Sevices />} />
        <Route path="/project" element={<Project />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/testimonial" element={<Testimonial />} />
         <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>

      </BrowserRouter>  
    </div>
  );
}

export default App;
