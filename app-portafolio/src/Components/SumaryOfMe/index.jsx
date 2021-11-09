import './style.css';
import minhaFoto2 from '../../images/MinhaFoto2.jpeg'

function SumaryOfMe() {
  return (
    <div className="contentSumary">
      <div>
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
      <img src={ minhaFoto2 } className="minhaFoto" alt="foto de Martin" />
      
    </div>
  );
}

export default SumaryOfMe;
