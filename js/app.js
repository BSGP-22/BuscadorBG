const marca = document.querySelector ('#marca');
const year = document.querySelector ('#year');
const minimo = document.querySelector ('#minimo');
const maximo = document.querySelector ('#maximo');
const puertas = document.querySelector ('#puertas');
const Trasmicion = document.querySelector ('#trasmicion');
const color = document.querySelector ('#color');

// contenedor para los resultados
const resultado = document.querySelector('#resultado');


// variable para los años 
const max= new Date().getFullYear();
const min = max-10;
// Generar objeto con la busqueda 
const datosBusqueda = {
    marca: '', 
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision : '', 
    color: '',    
}




document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);

    //llenar las opciones de años
    llenarSelect()
})

marca.addEventListener('input', e=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('input', e => {
    datosBusqueda.year = parseInt(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value
    // Mandar llamar la función de filtrar Autos
   filtrarAuto();
});


function mostrarAutos(autos){
limpiarHTML();
autos.forEach( auto => {
    const {marca, modelo, year, puertas, transmision, precio, color}= auto;
    const autoHTML = document.createElement('p');
    autoHTML.textContent=` 
    ${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmicion: ${transmision} - Precio: ${precio} - Color: ${color}

    `;
    resultado.appendChild(autoHTML)
})
}
// limpiar el html
function limpiarHTML(){
while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);  
}
}


//Genera los años del select 

function llenarSelect(){
for (let i = max; i >= min; i-- ){
    
const opcion= document.createElement('option');
opcion.value = i;
opcion.textContent = i;
year.appendChild(opcion);


}
}

// funcion que filtra en base a la busqueda 
// funcion de alto nivel 
// funcion que toma una funcion 
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear).filter( filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    //console.log(resultado);

if (resultado.length){
    mostrarAutos(resultado);

}else {
    noResultado();
}
}
function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado)
}

function filtrarMarca (auto){
    const {marca}= datosBusqueda;
    if (marca){
        return auto.marca===datosBusqueda.marca;

    }
    return auto;


}

function filtrarYear(auto){
    const {year}= datosBusqueda;
    if (year){
        return auto.year=== year;

    }
    return auto;

}
function filtrarMinimo(auto){
    const {minimo}= datosBusqueda;
    if (minimo){
        return auto.precio>=minimo;

    }
    return auto;

}

function filtrarMaximo (auto){
    const {maximo}= datosBusqueda;
    if (maximo){
        return auto.precio<=maximo;

    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas}= datosBusqueda;
    if (puertas){
        return auto.puertas=== puertas;

    }
    return auto;
}
function filtrarTransmision (auto){
    const {transmision}= datosBusqueda;
    if (transmision){
        return auto.transmision === transmision;

    }
    return auto;
}
function filtrarColor (auto){
    const {color}= datosBusqueda;
    if (color){
        return auto.color === color;

    }
    return auto;
}