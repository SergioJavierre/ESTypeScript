const readline = require('readline');

const lector = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const saludador = (nombre) => {
  console.log("Hola "+nombre)
  lector.question('¿Qué estudias? ', estudios);
}

const estudios = (grado) => {
  if(grado == "web"){
    console.log("Contratado!")
  }
  else {
    console.log("Suena divertido!")
  }
  lector.close()
}


lector.question('¿Cómo te llamas? ', saludador);

export{}