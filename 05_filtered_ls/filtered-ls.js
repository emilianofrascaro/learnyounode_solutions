const fs = require('fs')

const extension = '.'+process.argv[3]

fs.readdir(process.argv[2], function(err, data){
    if(err){
        console.err(err)
    }else{
        for(let i=0; i<data.length; i++){
            if(data[i].endsWith(extension)){
                console.log(data[i])
            }
        }
    }
})