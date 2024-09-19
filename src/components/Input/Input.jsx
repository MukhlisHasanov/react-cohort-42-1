import "./styles.css";

function Input({name, type, placeholder, label}) {

    const inputName = name;
    const inputType = type;
    const inputPlaceholder = placeholder;
    const inputLabel = label;
    return <div className="input-component" type={inputType} placeholder={inputPlaceholder} label={inputLabel}>
        <p className="input-name">Name: {name}</p></div>;
    
  }
  
  export default Input;
  