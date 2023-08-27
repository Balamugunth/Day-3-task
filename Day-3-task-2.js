
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function(){
    let flags = JSON.parse(xhr.responseText);

    let Allflags= [];
    
    for(let flag of flags){
        Allflags.push(flag['flags']);
    }
    console.log(flags);

}

xhr.send();