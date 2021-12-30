import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Contact } from '..';
AOS.init();

function Footer() {
  return(
    <div id='contact' className="mainFooter">
      <nav className='contact'>
      <Contact />
      </nav>
    </div>
  );
};

export default Footer;