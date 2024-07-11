import { createRoot } from "react-dom/client";
import { App } from "./App.js";
import "./index.css";

const domNode = document.getElementById("root");
if (domNode) {
	const root = createRoot(domNode);

	root.render(<App />);
}
