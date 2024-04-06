import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="divLogin">
      <h1>Please log in</h1>
      <LoginForm></LoginForm>
      <Link className="linkLogin" to="/register">
        Registration
      </Link>
    </div>
  );
}