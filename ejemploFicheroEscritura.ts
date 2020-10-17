const fs = require('fs');

const datos = 'Sergio\nJavierre\nsergio.javierre@fppiramide.com'

fs.writeFile('escritura.txt', datos, (err) => {
    if (err) throw err;
    console.log('Fichero creado');
});

export{}