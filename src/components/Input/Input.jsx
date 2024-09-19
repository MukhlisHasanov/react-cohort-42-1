import "./styles.css";

function Input({ id, name, type = "text", placeholder, label }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input-component"
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

export default Input;