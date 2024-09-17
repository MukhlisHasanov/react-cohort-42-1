import "./styles.css";

function Button({name, type}) {

  const buttonName = name;
  const buttonType = type;
  return <button className="button-component" type={buttonType}>{buttonName}</button>;
}

export default Button;
