import Home from './Home';
import {Layout,Contact,Schema,Pillar} from './components/Institutional';
import {pillars} from './legal-content';
export default function App({path='/'}:{path?:string}){const slug=path.replace(/^\/|\/$/g,'');const index=pillars.findIndex(p=>p.slug===slug);if(index>=0)return <Pillar index={index}/>;if(slug==='contato')return <Layout><Schema/><section className='section contact-title'><h1>Fale pelos canais oficiais.</h1><p>Atendimento em Rio Branco, mediante agendamento, e remoto quando cabível.</p></section><Contact heading={false}/></Layout>;if(slug)return <Layout><section className='section'><h1>Página não encontrada.</h1><a href='/'>Voltar ao início</a></section></Layout>;return <Home/>;}
