import { Link } from "react-router-dom";

export function Contato() {
  return (
    <div>
      <h1>Bem vindo a página contatos!</h1>
      <h3>Telefone: (xx) xxxx-xxxx </h3>
      <Link to="/about">Sobre</Link>
      <br />
      <Link to="/">Ir para Home</Link>
    </div>
  );
}
