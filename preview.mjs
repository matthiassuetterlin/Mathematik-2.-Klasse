import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const target=resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(!target.startsWith(root+sep)){res.writeHead(403).end();return;}const data=await readFile(target);res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(404).end('Nicht gefunden');}}).listen(4173,'127.0.0.1',()=>console.log('Zahlenwerkstatt: http://127.0.0.1:4173'));
