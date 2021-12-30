import './style.css';

function Button(props) {
  return (
    <div className="btn-div">
      <a href={ props.link }>
        <button type="button" >{ props.name }</button>
      </a>
    </div>  
  );
}

export default Button;
