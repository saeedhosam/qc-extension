import { createRoot } from "react-dom/client";
import "./index.css";
import Item from "./components/Item";

// Now, we just tell React to render our complete component
createRoot(document.getElementById("root")!).render(
  <div>
    <Item />
  </div>
);