const net = require('net')
var strftime = require('strftime') 

const server = net.createServer(function(socket){
    socket.end(strftime('%Y-%m-%d %H:%M')+'\n')
})

server.listen(Number(process.argv[2]))