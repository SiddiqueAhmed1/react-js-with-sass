import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import CounterProvider from "./Provider/CounterProvider.jsx";
import MsgProvider from "./Provider/MsgProvider.jsx";

createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <MsgProvider>
      <App />
    </MsgProvider>
  </CounterProvider>
);
