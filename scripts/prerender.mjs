import {createServer} from 'vite';
import {renderToString} from 'react-dom/server';
import {createElement} from 'react';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const server=await createServer({server:{middlewareMode:true,hmr:false},appType:'custom'});
try{
const {default:App}=await server.ssrLoadModule('/src/App.tsx');
const {pillars,canonical}=await server.ssrLoadModule('/src/legal-content.ts');
const template=await readFile('dist/index.html','utf8');
const pages=[{path:'/',title:'Advocacia em Rio Branco | Márcio Jr. França',description:'Orientação jurídica em Rio Branco e no Acre. Regularização fundiária, previdenciário e outras áreas.'},...pillars.map(p=>({...p,path:'/'+p.slug+'/'})),{path:'/contato/',title:'Contato | Márcio Jr. França',description:'Endereço, telefone e canais oficiais de atendimento em Rio Branco.'},{path:'/404/',title:'Página não encontrada',description:'Volte ao início para encontrar a orientação desejada.'}];
for(const p of pages){
let html=template.replace(/<title>.*?<\/title>/,'<title>'+p.title+'</title>').replace(/<meta name="description"[^>]*>/,'<meta name="description" content="'+p.description+'">').replace('</head>','<link rel="canonical" href="'+canonical+p.path+'"></head>').replace('<div id="root"></div>',()=>'<div id="root">'+renderToString(createElement(App,{path:p.path}))+'</div>');
const dir='dist'+p.path;await mkdir(dir,{recursive:true});await writeFile(dir+'index.html',html);if(p.path==='/404/')await writeFile('dist/404.html',html);
}
}finally{await server.close();}
