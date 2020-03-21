const url = require('url')
const http = require('http')

const server = http.createServer(function(request, response){
    let url_to_parser = url.parse(request.url, true)
    if(request.method=='GET'){
        let parameters = url_to_parser.query
        let iso = parameters['iso']
        let date = new Date(iso)
        let value = {}
        if(url_to_parser.pathname=='/api/parsetime'){
            value = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}
        }else if(url_to_parser.pathname=='/api/unixtime'){
            value = {'unixtime': date.getTime()}
        }else{
            response.end()
        }

        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(value))
    }else{
        response.end()
    }
 })
 
 server.listen(Number(process.argv[2]))