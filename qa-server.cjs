const http=require('node:http'),fs=require('node:fs');
const i=process.argv.indexOf('--port');const port=i>=0?Number(process.argv[i+1]):Number(process.env.PORT||4173);
http.createServer((req,res)=>{res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});if(req.url.includes('qa=')){const w=req.url.includes('tablet')?768:390;res.end('<!doctype html><html><body style="margin:0"><iframe title="直向測試" src="/" style="border:0;width:'+w+'px;height:1024px"></iframe></body></html>')}else res.end(fs.readFileSync(__dirname+'/dist/index.html'))}).listen(port,'0.0.0.0');
