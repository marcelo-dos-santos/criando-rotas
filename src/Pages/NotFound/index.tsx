import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <br />
      <h1>Ops essa página não existe!!</h1>
      <Link to="/">Voltar para a página Home</Link>
    </div>
  );
}
