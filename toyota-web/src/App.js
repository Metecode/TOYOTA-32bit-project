import { useRoutes, generatePath } from "react-router-dom";
import routes from "./routes";
import { url } from "./utils";

function App() {
  document.body.style = 'background: #B9F3FC;';
  return useRoutes(routes);
}

export default App;
