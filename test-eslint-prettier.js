'use strict';

const express = require('express');
const app = express();

const matriz = ['Franqsanz Dev', 'eloper'];
//let concatenar = matriz.reduce((nombre, profecion) => nombre.concat(profecion));

//const name = 'Franqsanz Dev';
//const surname = 'eloper';

//let nameMayus = name + surname;
//console.log(concatenar);

/*function confirm(str, target) {
  let reGex = new RegExp(target + '$', 'g');
  return console.log(str.match(reGex) ? true : false);
}
confirm('franco', 'g');*/

let fecha = new Date().toLocaleDateString();
console.log(fecha);

app.listen(1000, () => console.log('server on port'));
