import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css"

function LoginForm() {
  const inputEmail = {
    inputName: "Email",
    inputType: "email",
    inputPlaceholder: "Enter your email",
    inputLabel: "Email",
  };

  const inputPassword = {
    inputName: "Password",
    inputType: "password",
    inputPlaceholder: "Enter your password",
    inputLabel: "Password",
  };

  const loginButton = {
    buttonName: "Login",
    buttonType: "submit",
  };

  return (
    <div className="login-component">
      <Input
        inputName={inputEmail.inputName}
        inputType={inputEmail.inputType}
        inputPlaceholder={inputEmail.inputPlaceholder}
        inputLabel={inputEmail.inputLabel}
      />
      <Input
        inputName={inputPassword.inputName}
        inputType={inputPassword.inputType}
        inputPlaceholder={inputPassword.inputPlaceholder}
        inputLabel={inputPassword.inputLabel}
      />
      <Button
        buttonName={loginButton.buttonName}
        buttonType={loginButton.buttonType}
      />
    </div>
  );
}

export default LoginForm;
