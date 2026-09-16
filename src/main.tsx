import {hydrateRoot,createRoot} from 'react-dom/client';
import App from './App';
import './institutional.css';
const root=document.getElementById('root')!;
const app=<App path={window.location.pathname}/>;
if(root.hasChildNodes())hydrateRoot(root,app);else createRoot(root).render(app);
// Medição de audiência (Umami). Só carrega se as variáveis existirem na Vercel e no domínio oficial.
const umamiSrc=import.meta.env.VITE_ANALYTICS_ENDPOINT,umamiId=import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
if(umamiSrc&&umamiId&&/(^|\.)marciofranca\.adv\.br$/.test(location.hostname)){const s=document.createElement('script');s.defer=true;s.src=String(umamiSrc).replace(/\/$/,'')+'/script.js';s.dataset.websiteId=String(umamiId);s.dataset.domains='www.marciofranca.adv.br,marciofranca.adv.br';document.head.appendChild(s);}
