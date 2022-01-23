import data from "../../data/contacto";
import './style.css'

function Contact() {
  return (
    <div className="contact-icons">
      {
        data.map(({ id, name, icon, link }) => (
          <a key={ id } href={ link } target="_blank" rel="noreferrer">
            <img src={ icon } alt={ name } className='icon' />
          </a>
        ))
      }
    </div>
  );
}

export default Contact;
