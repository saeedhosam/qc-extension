import { createRoot } from "react-dom/client";
import "@material/web/checkbox/checkbox.js";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <div className="border">
    <md-checkbox label="Accept Terms"></md-checkbox>
  </div>,
);
