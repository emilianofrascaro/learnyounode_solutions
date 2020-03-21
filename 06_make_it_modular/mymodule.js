module.exports = function(path, extension, callback){
    const fs = require('fs')
    let array = new Array()
    fs.readdir(path, function(err, list){
        if(err){
            callback(err)
        }else{
            for(let i=0; i<list.length; i++){
                if(list[i].endsWith('.'+extension)){
                    array.push(list[i])
                }
            }
            callback(null, array)
        }
    })
}