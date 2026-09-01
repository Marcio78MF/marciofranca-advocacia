import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

if (
  analyticsEndpoint &&
  analyticsWebsiteId &&
  !String(analyticsEndpoint).includes("%") &&
  !String(analyticsWebsiteId).includes("%")
) {
  const src = String(analyticsEndpoint).replace(/\/$/, "");
  const script = document.createElement("script");
  script.defer = true;
  script.src = src.endsWith(".js") ? src : `${src}/script.js`;
  script.dataset.websiteId = String(analyticsWebsiteId);
  script.dataset.domains = "www.marciofranca.adv.br,marciofranca.adv.br";
  document.body.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
