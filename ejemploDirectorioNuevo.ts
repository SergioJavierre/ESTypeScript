const fs = require("fs")

fs.mkdir("./imagenes", (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Directorio creado")
  }
})

export{}