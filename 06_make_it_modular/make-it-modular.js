const mymodule = require('./mymodule.js')

const path = process.argv[2]
const extension = process.argv[3]

mymodule(path, extension, function(err, data){
    if(err){
        console.err(err)
    }else{
        for(let i=0; i<data.length; i++){
            console.log(data[i])
        }
    }
})