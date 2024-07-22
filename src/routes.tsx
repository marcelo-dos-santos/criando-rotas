import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contato } from "./Pages/Contato";
import { Produto } from "./Pages/Produto";
import { NotFound } from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/produto/:id",
    element: <Produto />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { router };
