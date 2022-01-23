import './style.css';
import minhaFoto2 from '../../images/MinhaFoto2.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

function SumaryOfMe() {
  return (
    <div data-aos="fade-up" className="content">
      <div data-aos="fade-up">
      <p className="title">— Sobre mim</p>
      <h1 className="title">Quem eu sou</h1>

      <p className="paragSobreMim">
      Sou apaixonado pela tecnologia, estudo Desenvolvimento Web na trybe,
      uma escola que ensina a programar, a aprender e a trabalhar.
      Comecei meus estudos cursando engenharia civil na Venezuela,
      país onde nasci, contudo decidi parar meu curso para buscar
      novas oportunidades. Atualmente morando no Brasil, decidi estudar desenvolvimento web. Hoje meu objetivo é atuar como pessoa 
      desenvolvedora e fazer parte da mudança que a tecnologia proporciona
      para o mundo.
      </p>

      </div>
      <img className="paragSobreMim" src={ minhaFoto2 } className="minhaFoto" alt="foto de Martin" />
      
    </div>
  );
};

export default SumaryOfMe;
