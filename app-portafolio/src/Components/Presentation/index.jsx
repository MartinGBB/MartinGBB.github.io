import './style.css';
import fotoMartin from '../../images/minhafoto.jpg';
import Button from "../Button";
import { Link } from 'react-router-dom'

function Presentation() {
  return(
    <div className="content">
      <div className="text-content">
        <span>Olá, o meu nome é</span>
        <h1 className="nome">Martin Brazón</h1>
        <p>- Desenvolvedor Web Full Stack</p>
        <Link to="/pagetwo">
          <Button />
        </Link>
      </div> 
      <img src={fotoMartin} className="photo-martin" alt="foto de Martin" />
    </div>
  );
};

export default Presentation;
