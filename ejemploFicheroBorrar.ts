const fs = require("fs")

const fichero = "datos.txt"

fs.unlink(fichero, (err) => {
  if (err) {
    throw err
  } else {
    console.log("Fichero eliminado")
  }
})

export{}