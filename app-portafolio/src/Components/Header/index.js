import './style.css';
import hamburgerIcon from '../../images/hamburgerIcon.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

function Header() {
  return(
    <div data-aos="fade-down" className="mainHeader">
      <img src={ hamburgerIcon } className="menu" alt="foto de Martin" />
      <h1 className="titlePortafolio">Portáfolio Pessoal</h1>
    </div>
  );
}

export default Header;