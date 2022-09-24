
// Aplica funcionalidad secuencial al botón Cambiar estilo

let _style = document.getElementsByTagName("link")[0];

function toggleTheme() {
    if (_style.getAttribute('href') == 'css/estilos.css') {
        _style.setAttribute('href', 'css/estilos-retro.css');
    } else if (_style.getAttribute('href') == 'css/estilos-retro.css') {
        _style.setAttribute('href', 'css/estilos-urbano.css');
    } else {
        _style.setAttribute('href', 'css/estilos.css');
    }
};


// Aplica funcionalidad aleatoria al botón de los dados

const estilos = ['css/estilos.css', 'css/estilos-retro.css', 'css/estilos-urbano.css'];

function randomTheme() {
    _style.setAttribute('href', estilos[Math.floor(Math.random() * estilos.length)])
};

// Guarda y aplica último estilo utilizado en localStorage

let btnRecordar = document.getElementById("recordar");

function recordar(){
    localStorage.setItem("href", _style.getAttribute('href'));
    btnRecordar.classList.add("disabled"); //Agrega la clase disabled al botón recordar cuando es presionado
};

let lastStyle;

window.onload = function (){              //Al cargar se ejecuta la función anónima que reemplaza el valor de la última hoja de estilo guardada en el localStoge
lastStyle = localStorage.getItem("href", _style.getAttribute('href'));
_style.setAttribute('href', lastStyle);
};

// Intento de aplicar funcionalidad al elemento select del HTML

let estilosSelect = document.getElementById('estilos');
let estiloSeleccionado = estilosSelect.value;

let opciones = estilosSelect.options.selectedIndex;
console.log(opciones);

function selectStyle() {
    console.log("Hiciste click en el select")
    if (opciones === "Por defecto") {
        _style.setAttribute('href', 'css/estilos.css');
        return;
    }
    if (opciones === "Retro") {
        _style.setAttribute('href', 'css/estilos-retro.css');
        return;
    }
    if (opciones === "Urbano") {
        _style.setAttribute('href', 'css/estilos-urbano.css');
        return;
    }
    if (opciones === "Sin estilo") {
        _style.removeAttribute('href');
        return;
    }
}
console.log(estilosSelect)

// // Intento de aplicar funcionalidad a los input radio

// const inputPorDefecto = document.getElementById("por-defecto");
// const inputRetro = document.getElementById("por-defecto");
// const inputUrbano = document.getElementById("por-defecto");
// const inputSinEstilo = document.getElementById("por-defecto");

// console.log(inputPorDefecto)
// inputPorDefecto.addEventListener('click', () => {
//     _style.setAttribute('href', 'css/estilos.css');
// });










// console.log("***********************")
// arrRadios = document.radios.estilosr;
// console.log(arrRadios);


// function setRadio(name, value) {
//     document.querySelectorAll(`input[name="${name}"]`).forEach(element => {
//         if(element.value === value) {
//             element.checked = true;
//         }
//     });
// }

// for (let i = 0; i < arrRadios.length; i++){ 
//     if (arrRadios[i].checked) {
//         break; 
//     }
// } 

// function cambiaColor() { 
//     for (let i = 0; i < arrRadios.length; i++){ 
//         if (arrRadios[i].checked) {
//             break; 
//         }
//     } 
//     document.bgColor = document.fcolores.colorin[i].value 
// } 

// // radioEstiloActivo = document.querySelector('input[name="estilo-radio"]:checked').value;

// // console.log(radioEstiloActivo)












// // function selectStyleRadio() {
// // let estiloRadio = document.querySelector('input').value;
// // console.log(estiloRadio);
// // if (estiloRadio === "por-defecto") {
// //     _style.setAttribute('href', 'css/estilos.css');
// //     return;
// // }
// // if (estiloRadio === "retro") {
// //     _style.setAttribute('href', 'css/estilos-retro.css');
// //     return;
// // }
// // if (estiloRadio === "urbano") {
// //     _style.setAttribute('href', 'css/estilos-urbano.css');
// //     return;
// // }
// // if (estiloRadio === "sin-estilo") {
// //     _style.removeAttribute('href');
// //     return;
// // }
// // }