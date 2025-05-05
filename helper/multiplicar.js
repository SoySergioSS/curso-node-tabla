const fs = require('fs');
const {resolve} = require('path');
const colors = require('colors');

const crearArchivo = async (j = 5, listar = true, hasta = 10) => {
    try{
        let salida = '';
        let consola = '';
        for(i=1; i <= hasta; i++){
            salida += `${j} ${'x'} ${i} ${'='} ${j*i}\n`;
            consola += `${j} ${'x'.green} ${i} ${'='.green} ${j*i}\n`;
        }
        if(listar){
            console.log('=====================');
            console.log('Tabla del:', colors.blue(j));
            console.log('=====================');
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-del-${j}.txt`, salida);
            return `tabla-del-${j}.txt`;
    }catch(err){
        throw err;
    }
};

module.exports = {
    crearArchivo
}