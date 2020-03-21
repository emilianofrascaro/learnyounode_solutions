const http = require('http')

http.get(process.argv[2], function(response){
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
        console.log(output.length)
        console.log(output)
    })
})