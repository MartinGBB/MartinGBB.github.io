import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Contact } from '..';
AOS.init();

function Footer() {
  return(
    <div className="mainFooter">
      <nav className='contact'>
      <Contact />
      <p>desenvolvido por Martin Brazon</p>
      </nav>
    </div>
  );
};

export default Footer;