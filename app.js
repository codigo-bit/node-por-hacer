//required
const argv = require('./config/yargs').argv;
const colors = require("colors");
const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch ( comando ){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('======Tareas====='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('================='.green);
        }
    break;

    case 'actualizar':
    let respuesta = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(respuesta);
    break;

    case 'borrar':
        let dato = porHacer.borrar(argv.descripcion);
        console.log(dato);
    break;

    default:{
     console.log("comando no reconocido");
    }
}
