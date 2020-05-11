const opciones = {
    base : {
        demand:true,
        alias: 'b'
      },
    limite:{
        alias: 'l',
        default: 10
    }
}

// requireds
const argv = require('yargs')
.command('listar', 'Genera un archivo con la tabla de multiplicar depende de su limite y base', opciones)
.command('crear', 'Genera un archivo con la tabla de multiplicar depende de su base', opciones)
.help()
.argv;

module.exports = {
    argv
}