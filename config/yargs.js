
const argv = require("yargs")
.command('crear' , 'crear un elemento por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc:'descripcion de la tarea por hacer'
    }
})
.command('actualizar', 'actualizar el estado completo de una tarea', {
    descripcion: {
        alias:'d',
        demand:true,
        desc:'decripcion de la actualizacion'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'marca como completado la tarea o pendiente'
    }
})
.command('borrar', 'borrar elemento', {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'descripcion del elemento a borrar'
    }
})
.help()
.argv

module.exports = {
    argv
}

