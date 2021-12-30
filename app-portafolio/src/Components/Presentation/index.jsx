import './style.css';
import fotoMartin from '../../images/minhafoto.jpg';
import Button from "../Button";

function Presentation() {
  return(
    <div data-aos="fade-up" className="content">
      <div className="text-content">
        <span className="info">Olá, o meu nome é</span>
        <h1 className="info">Martin Brazón</h1>
        <p className="info">— Desenvolvedor Web Full Stack</p>
          <Button link={ '#about-me' } name={ 'conoceme' } />
      </div> 
      <img src={fotoMartin} className="photo-martin" alt="foto de Martin" />
    </div>
  );
};

export default Presentation;
