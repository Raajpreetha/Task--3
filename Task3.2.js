let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function(){
    console.log('The response is received from the server');
    let countries = JSON.parse(xhr.responseText);
for(let flags of countries){
    console.log(flags.flag);
}
}

