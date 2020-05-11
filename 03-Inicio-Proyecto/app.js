const argv = require('./config/yargs').argv;
const { crear, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando){
  case 'listar':
    listar(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado`))
      .catch(e => console.log(e));
    break;
  case 'crear':
    crear(argv.base)
      .then( archivo => console.log(`Archivo creado`))
      .catch(e => console.log(e));
    break;
  default:
    console.log('Comando no reconocido');
    break;
}

// console.log('Limite', argv);
//console.log(process.argv);
// process = Procesos que inicia Node al ejecutar el archivo
// argv = Argumentos que se obtienen en el proceso
// let argv2 = process.argv;
//console.log('Limite', argv.limite);


/* // parametro enviado despúes del nombre de archivo ejemplo: --base=10
let parametro = argv[2];
//console.log(parametro);
// Obtenemos el número ejemplo: 10
let base = parametro.split('=')[1];
console.log(base); */

/* crearArchivo(base)
  .then( archivo => console.log(`Archivo creado ${archivo}`))
  .catch(e => console.log(e)); */
