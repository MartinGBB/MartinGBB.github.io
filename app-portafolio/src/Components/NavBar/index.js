import './style.css';

function NavBar() {
  return (
    <div className="navegation-container">
      <nav>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about-me'>About Me</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
