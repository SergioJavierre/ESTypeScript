const fs = require('fs');
const readline = require('readline');

const lector = readline.createInterface({
  input: fs.createReadStream('datos.txt'), 
  output: process.stdout,
  terminal: false
});

let numLinea = 0

const muestraDatos = (linea) => {
    switch(numLinea){
        case 0:{
            console.log("Nombre: "+linea)
            break
        }
        case 1:{
            console.log("Apellido: "+linea)
            break
        }
        case 2:{
            console.log("Email: "+linea)
            break
        }
    }
    numLinea++
}

lector.on('line', muestraDatos)

export{}