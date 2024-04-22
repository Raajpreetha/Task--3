let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function(){
    console.log('The response is received from the server');
    let countries = JSON.parse(xhr.responseText);
    // to print all the countries names
for(let a of countries){
    console.log(a.common);
}
    // to print all the countries region
for(let reg of countries){
    console.log(reg.region);
}  
// to print all the countries subregion
for(let sb of countries){
    console.log(sb.subregion);
}
// to print all the countries population
for(let b of countries){
    console.log(b.population);
}
}

