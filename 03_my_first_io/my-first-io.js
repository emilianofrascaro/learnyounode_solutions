const fs = require('fs')

let file_to_read = process.argv[2]

let buf = fs.readFileSync(file_to_read)

let text = buf.toString()

let num_of_rows = text.split('\n');

console.log(num_of_rows.length-1)