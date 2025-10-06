import "./signin.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function signin() {
  return (
    <div className="container">
      <div className="card">

        <h2>Entre na sua conta e negocie com segurança!</h2>

        <p>Acesse e aproveite uma expreriência segura dentro da KSC </p>

        <div className="socialLogin">

          <button className="google">
            <FcGoogle size={24} />
          </button>

          <button className="facebook">
            <FaFacebookF size={24} />
          </button>

        </div>

        <div className="divider">

          <span>Ou conect com</span>

        </div>

        <label htmlFor="email">E-mail</label>

        <input type="email" id="email" placeholder="Digite seu e-mail" />

        <button className="acessarBtn">Acessar</button>

        <p className="register">
          Não tem uma conta? <a href="/signup">Cadastre-se</a>
        </p>

      </div>

      <p className="terms">
        Ao continuar, você concorda com os <a href="#">Termos de Uso</a> e{" "}
        <a href="#">Politica de Privacidade</a> da KSC e seus parceiros, e em
        receber comunicações da KSC.
      </p>

    </div>
  );
}
