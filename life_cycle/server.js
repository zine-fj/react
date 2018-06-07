let http = require('http');
let fs = require('fs');

http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == '/demo') {
        fs.readFile('./demo.html',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        })
    } else if(req.url == '/') {
        res.write('index');
        res.end();
    } else {
        res.write('404');
        res.end();
    }
}).listen(9999);

console.log('server running at 9999')