import {createServer} from 'vite';
import {renderToString} from 'react-dom/server';
import {createElement} from 'react';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const server=await createServer({server:{middlewareMode:true,hmr:false},appType:'custom'});
try{
const {default:App}=await server.ssrLoadModule('/src/App.tsx');
const {pillars,canonical,privacy}=await server.ssrLoadModule('/src/legal-content.ts');
const template=await readFile('dist/index.html','utf8');
const pages=[
{path:'/',title:'Advocacia em Rio Branco | Márcio Jr. França',description:'Orientação jurídica em Rio Branco e no Acre. Regularização fundiária, previdenciário e outras áreas.'},
...pillars.map(p=>({...p,path:'/'+p.slug+'/'})),
{path:'/contato/',title:'Contato | Márcio Jr. França',description:'Endereço, telefone e canais oficiais de atendimento em Rio Branco.'},
{...privacy,path:'/privacidade/'},
{path:'/404/',title:'Página não encontrada | Márcio Jr. França',description:'Volte ao início para encontrar a orientação desejada.',noindex:true}];
for(const p of pages){
const url=canonical+p.path;
const head=[
`<meta property="og:locale" content="pt_BR">`,
`<meta property="og:title" content="${esc(p.title)}">`,
`<meta property="og:description" content="${esc(p.description)}">`,
`<meta property="og:image:width" content="1200">`,
`<meta property="og:image:height" content="630">`,
`<meta property="og:image:alt" content="Márcio Jr. França Advocacia Jurídica, Rio Branco/AC">`,
`<meta name="twitter:card" content="summary_large_image">`,
p.noindex?'':`<meta property="og:url" content="${url}">`,
p.noindex?'':`<link rel="canonical" href="${url}">`,
'<link rel="apple-touch-icon" href="/assets/brand/favicon.png">'
].filter(Boolean).join('\n  ');
let html=template
.replace(/<title>.*?<\/title>/,()=>'<title>'+esc(p.title)+'</title>')
.replace(/<meta name="description"[^>]*>/,()=>'<meta name="description" content="'+esc(p.description)+'">')
.replace('</head>',()=>'  '+head+'\n</head>')
.replace('<div id="root"></div>',()=>'<div id="root">'+renderToString(createElement(App,{path:p.path}))+'</div>');
if(p.noindex)html=html.replace(/<meta name="robots"[^>]*>/,'<meta name="robots" content="noindex, follow">');
const dir='dist'+p.path;await mkdir(dir,{recursive:true});await writeFile(dir+'index.html',html);if(p.path==='/404/')await writeFile('dist/404.html',html);
}
}finally{await server.close();}
