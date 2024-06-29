const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
if(err){
    document.querySelector("h1").innerHTML = "Didn't read file with success";
    
    }
    document.querySelector("h1").innerHTML = "Yeah!";
}
else
    {document.querySelector("h1").innerHTML = "Yeah333!";}
