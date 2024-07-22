import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina Home</h1>
      <span>Primeira pagina com navegação</span>
      <br />

      <Link to="/about">Sobre</Link>
    </div>
  );
}
