const Button = ({color, text, fnClick}) => {
  return (
    <>
      <button
      onClick={fnClick}
      style={{ backgroundColor: color }}
      className="btn"
      >
        {text}  
      </button>
    </>
  ); 
}

export default Button;