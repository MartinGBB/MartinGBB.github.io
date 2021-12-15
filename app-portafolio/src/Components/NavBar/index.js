import './style.css';

function NavBar() {
  return (
    <div className="navegation-container">
      <nav>
        <ul>
          <li>
            <a href='#portafolio'>Home</a>
          </li>
          <li>
            <a href='#abautme'>About Me</a>
          </li>
          <li>
            <a href='/skills'>Skills</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
