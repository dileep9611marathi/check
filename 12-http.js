const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('welcome to our home page')
    }
     if(req.url ==='/about'){
        res.end('here is our short history')
    }
    res.end(`<h1>Ooops!</h1>
        <p> we can"t seem to fin thi page please check out the url entered </p1>`)
})

server.listen(5000)