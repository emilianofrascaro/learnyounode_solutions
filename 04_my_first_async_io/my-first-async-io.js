const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function(err, data){
    if(!err){
        const num_of_line = data.split('\n').length-1
        console.log(num_of_line)
    }
})