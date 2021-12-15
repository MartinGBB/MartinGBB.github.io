import './style.css';
// import hamburgerIcon from '../../images/hamburgerIcon.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

function Footer() {
  return(
    <div className="mainFooter">
      {/* <img src={ hamburgerIcon } className="menu" alt="foto de Martin" /> */}
    <h1 className="text">este sera o rodapé</h1>
    </div>
  );
}

export default Footer;