const fs = require('fs'); 
  
const getCurrentFilenames = () => { 
    console.log("Current filenames:"); 
    fs.readdirSync(__dirname).forEach(file => { 
      console.log(file); 
    }); 
  } 

getCurrentFilenames(); 
   
fs.rename('escritura.txt', 'datospersonales.txt', () => { 
  console.log("Fichero renombrado!"); 
  getCurrentFilenames(); 
}); 
   

export{}