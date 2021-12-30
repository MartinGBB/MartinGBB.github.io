import './style.css';
import { NavBar } from '..';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

function Header() {
  return(
    <div data-aos="fade-down" className="mainHeader">
      <NavBar />
    </div>
  );
}

export default Header;