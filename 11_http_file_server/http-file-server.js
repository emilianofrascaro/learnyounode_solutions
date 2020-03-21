const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){
    const file = fs.createReadStream(process.argv[3])
    file.pipe(response)
})

server.listen(Number(process.argv[2]))