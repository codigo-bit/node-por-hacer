//require
const fs = require ('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./DB/data.json', data, (err) => {
        if(err) throw new Error('No se puedo grabar', err);
    console.log("registro guardado");
    });
} 

const cargarDB = () =>{
 try{
    listadoPorHacer = require('../DB/data.json');
 }catch(e){
    listadoPorHacer = [];
 }   
}

const crear = (descripcion)  => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let busqueda = listadoPorHacer.findIndex(tarea => { // busqueda de la descripcion en el arreglo 
        return tarea.descripcion === descripcion;       // findIndex esta sentencia regresa -1 en caso de no encontrar                                                  //
    });                                                 // la descripcion que se busca
                                                        // en caso de encontrarla regresa la posicion en el arreglo
    if(busqueda >= 0) {
        listadoPorHacer[busqueda].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) =>{
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => { // filter -> filtra o elemina los elementos que deseas 
        return tarea.descripcion !== descripcion;       // regresa los elementos que no son coinciden a la descripcion 
    })                                                  // para con ellos formar el nuevo arreglo 

    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
       listadoPorHacer = nuevoListado;
       guardarDB();
       return true;
    }
}

module.exports = {
     crear,
     getListado,
     actualizar,
     borrar
} 