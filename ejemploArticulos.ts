const fs = require('fs');
const readline = require('readline');

let articulos = []

const lector = readline.createInterface({
  input: fs.createReadStream('articulos.txt'), 
  output: process.stdout,
  terminal: false
});

const guardaArticulos = (linea: string) => {
    let nombreArticulo = linea.split(';')[0]
    let precioArticulo = linea.split(';')[1]
    let articulo = {
        nombre:nombreArticulo,
        precio:precioArticulo
    }
    articulos.push(articulo)
}

const muestraArticulos = () => {
    console.log(articulos)
}

lector
.on('line', guardaArticulos)
.on('close', muestraArticulos)

export{}