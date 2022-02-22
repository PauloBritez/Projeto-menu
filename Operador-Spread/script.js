/*let numeros = [1, 2, 3, 4,]; // array de numeros 

let otroNumeros = [...numeros, 5, 6, 7, 8]; // spread operator para agregar elementos a un array

console.log(otroNumeros); */

/*let info = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
};

let novaInfo = {
    ...info,
    ciudad: 'Bogota',
    provincia: 'Cundinamarca',
    pais: 'Colombia'

}

console.log(novaInfo); */


function adicionarInfo(info) { // funcion que recibe un objeto
    let novaInfo = { // objeto que se retorna
        ...info,
        status: 'Activo',
        token: '123456789',
        fecha: new Date()
};
    return novaInfo; // retorna el objeto
}

console.log(adicionarInfo({nombre: 'Juan', apellido: 'Perez', edad: 30})); // llamada a la funcion










