const http = require('http')

let outputArray = new Array()
for(let i=0; i<3; i++){
    outputArray.push('')
}
let outputFinished = new Array()
for(let i=0; i<3; i++){
    outputFinished.push(false)
}

for(let i=2; i<process.argv.length; i++){

    http.get(process.argv[i], function(response){
        const { statusCode } = response;
        let output = ''
        let error;
        if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                            `Status Code: ${statusCode}`);
        }
        if (error) {
            console.error(error.message);
            // Consume response data to free up memory
            response.resume();
            return;
        }
        response.setEncoding('utf8');
        response.on('data', function(data){
            output = output + data
        })
        response.on('end', function(){
            //console.log(output)
            outputArray[i-2]=output
            outputFinished[i-2] = true
            if(outputFinished[0] && outputFinished[1] && outputFinished[2]){
                for(let j=0; j<3; j++){
                    console.log(outputArray[j])
                }
            }
        })
    })
}