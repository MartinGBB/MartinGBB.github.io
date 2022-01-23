import './style.css';
import { NavBar } from '..';

function Header() {
  return(
    <div data-aos="fade-down" className="mainHeader">
      <NavBar />
    </div>
  );
}

export default Header;