let origenElement;                                                                  // Variable creada para agregar contenido al textarea.
let inputCollection;                                                                // Variable creada para llamarla dentro del for y cambiar el valor disable de los inputs a false.
let btnReemplazar;                                                                  // Variable creada para dar interactividad al input reemplazar.
let destinoElement;                                                                 // Variable creada para cargar la información del textarea de origen.
let btnCambiarMin;                                                                  // Variable creada para dar interactividad al botón cambiar a minúsculas.
let nTimes;                                                                         // Variable creada para almacenar datos del prompt.

document.addEventListener('DOMContentLoaded', () => {                               // Arrow function que se ejecuta cuando ocurre el evento DOMContentLoaded.
    console.log('Contenido del DOM cargado');
    origenElement = document.getElementById('origen');
    origenElement.innerHTML = `Add the content to edit and move down. `;
    inputCollection = document.getElementsByTagName('input');
    for (let i = 0; i < inputCollection.length; i++) {                              // Se crea un for para cambiar el valor disable de los inputs a false,
        inputCollection[i].disabled = false;
    }
    btnCambiarMin = document.getElementsByTagName('button')[0];
    btnCambiarMin.disabled = false;                                                 // Cambia el valor disable de la etiqueta button a false.
    btnReemplazar = document.getElementById('btn-reemplazar');
    destinoElement = document.getElementById('destino')
    btnReemplazar.addEventListener('click', () => {                                 // Evento para reemplazar el contenido del destino por el del textarea.
        destinoElement.innerHTML = origenElement.value
    })
    inputCollection[1].addEventListener('click', () => {                            // Evento para agregar 1 vez el contenido del destino por el del textarea.
        destinoElement.innerHTML += origenElement.value
    })
    inputCollection[2].addEventListener('click', () => {                            // Evento para agregar 5 veces el contenido del destino por el del textarea.
        repeticion(5);
    })
    inputCollection[3].addEventListener('click', () => {                            // Evento para agregar 10 veces el contenido del destino por el del textarea.
        repeticion(10);
    })
    inputCollection[4].addEventListener('click', () => {                            // Evento para agregar n veces el contenido del destino por el del textarea.
        nTimes = prompt('¿Cuántas veces lo quieres agregar?')
        repeticion(nTimes);
    })
    inputCollection[5].addEventListener('click', () => {                            // Evento para vaciar el contenido del div de destino.
        destinoElement.innerHTML = '';
    })
    inputCollection[6].addEventListener('click', () => {                            // Evento para convertir a mayúsculas el contenido del div de destino.
        destinoElement.innerHTML = destinoElement.innerHTML.toUpperCase();
    })
    btnCambiarMin.addEventListener('click', () => {                                 // Evento para convertir a minúsculas el contenido del div de destino.
        destinoElement.innerHTML = destinoElement.innerHTML.toLowerCase();
    })

    liCollection = document.getElementsByTagName('li');                           // Asigna el string OK en el comienzo de todos los elementos li del HTML.
    for (let i = 0; i < liCollection.length; i++) {
        liCollection[i].innerHTML = `OK ${liCollection[i].innerHTML}`;
    }

    function repeticion(cantidad){
        for (let i = 0; i < cantidad; i++) {
            destinoElement.innerHTML += origenElement.value
        }
    }
});