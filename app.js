'use strict'
let prises = ['$15', '$25', '$15', '$100', '$25', '$15', '$15', '$10', '$10', '$10', '$10']
//function expression,  anonymous function
let funcPriseExpression = () => {
    let randomPrise = prises[Math.floor(Math.random() * prises.length)];
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = (randomPrise);
    document.body.append(div);

};//don't foget about semicolon;

//assign func to var
let assignFuncToVar = funcPriseExpression;

//let funcPriseExpression = prise;

let names = ['Vasia', 'Petia', 'Ania', 'Masha', 'Ashotik', 'Oscar', 'Pulup', 'Jada'];

// function declaration

function rulette1() {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = ("Winner" + " " + randomName);
    document.body.append(div);
    return randomName;
}

//current date
var today = new Date;
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = dd + '.' + mm + '.' + yyyy;


function drawing(date, text) {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = ("Today," + " " + date + " " + text);
    document.body.prepend(div);


}
drawing(today, "drawing of PRISES");

// event listener

const switcher = document.querySelector('.button');

switcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    // Console message 
  //  console.log('current class name: ' + className);
});


function createOnClick(button) {
    button.addEventListener('click'),
        () => {
            button.style.color = 'red';
        }

}
/*
// GET method //////////////////////////////////////////////////////////////////////////////
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:5500/index.html', 'true');
xhr.onload = function() {
    if (xhr.status == 200)
    console.log(xhr.responseText);
};
xhr.send();
*/
// POST method//////////////////////////////////////////////////////////////////////////////
let xhr = new XMLHttpRequest();
xhr.open('POST', 'http://127.0.0.1:5500/index.html', 'true');
xhr.onload = ()=> {
   // if (xhr.status == 200)
    console.log(xhr.responseDocument);
};
xhr.send();

/*
var requestURL = 'http://127.0.0.1:5500/index.html';
//var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'text';
//request.responseType = 'json';

request.send();

request.onload = ()=> {
    var responceJson = request.response;
    let div = document.createElement('div');
  
    div.innerHTML = (responceJson);
    document.body.append(div);
       
    console.log(responceJson);
  
  }

// GET method JSON//////////////////////////////////////////////////////////////////////////////////////

 // var requestURL = 'http://127.0.0.1:5500/index.html';
  var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  var request = new XMLHttpRequest();
  
  request.open('GET', requestURL);
  
  request.responseType = 'json';
  
  request.send();
  
  request.onload = ()=> {
      var responceJson = request.response;
        
      console.log(responceJson);
    
    }
  
*/
