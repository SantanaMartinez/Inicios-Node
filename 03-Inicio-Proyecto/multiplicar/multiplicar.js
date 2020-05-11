const fs = require('fs');
// Se puede exportar solamente esta función de la siguiente manera:
// module.exports.crearArchivo = (base) => {
let crear = (base) => {
    return new Promise((resolve, reject) =>{
        if(!validarNumero(base)) reject(`El valor introducido ${base} no es un número`);
        let data = construirTabla(base);
        let archivo = crearArchivo(base, data, 0);
        resolve(archivo);
    })
}

let listar = (base, limite) =>{
    return new Promise((resolve, reject) => {
        if(!validarNumero(base)) reject(`El valor introducido ${base} no es un número`);
        let data = construirTabla(base, limite);
        let archivo = crearArchivo(base, data, limite);
        resolve(archivo);
    })
}

let validarNumero = (numero) => {
    if(!Number(numero)) return false;
    return true;
}

let construirTabla = (base, limite) =>{
    let data = '';
    let inicio = base;
    let hasta = limite;
    if(!limite){
        inicio = 1;
        hasta = 10
    }
    for(let i = inicio; i <= hasta; i++){
        data += `${base} * ${i} = ${base * i}\n`;
    }
    return data;
}

let crearArchivo = (numeroTabla, data, limite) => {
    let nombreArchivo = ''
    if(limite === 0) nombreArchivo = `tabla-del-${numeroTabla}`;
    else nombreArchivo = `tabla-del-${numeroTabla}-al-${limite}`;
    fs.writeFile(`archivos/${nombreArchivo}.txt`, data, (err) => {
        if (err) return err;
        return `${nombreArchivo}.txt`;
    });
}
// O se puede exportar n funciones de la siguiente manera:
module.exports = {
    crear,
    listar
}