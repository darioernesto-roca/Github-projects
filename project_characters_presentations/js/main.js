// Se declarala variable para que quede global
let user = '';
//let user = prompt('¿Quién se presenta hoy?');
//console.log(user);

// Se crea en JS el elemento completeUserName que corresponde al innerHTML del span

// let completeUserName = document.getElementsByTagName('span')[0].addEventListener("click", botonclic);
let completeUserName = document.getElementsByTagName('span')[0];


// La función setCompleteName se encarga de cargar el contenido del prompt (let user) en el innerHTML del span (let completeUserName), convirtiendo según el caso el nombre sencillo a su variación de nombre completo.

const setCompleteName = () => {
    let title = ''
    if (user === 'bowser') {
        title = 'Bowser Morton Koopa';
        completeUserName.innerHTML = title;
    } else if (user === 'peach') {
        completeUserName.innerHTML = 'Princesa Peach Toadstool';
    } else if (user === 'yoshi') {
        title = 'T. Yoshisaur Munchakoopas';
        completeUserName.innerHTML = title;
    } else if (user === 'daisy') {
        title = 'Princesa Daisy ';
        completeUserName.innerHTML = title;
    } else {
        completeUserName.innerHTML = user;
    }
}

// La función showedCharacter toma el string del prompt lo convierte en minúsculas y busca el elemento por el id en el HTML, agregándole el atributo title 'Presentado'.
const showedCharacter = () => {
    let selectedCharacter = document.getElementById(user.toLowerCase());
    console.log(selectedCharacter);
    // Se reinician los contenedores para que se cierren los telones
    let cajas = document.getElementById('cajas');
    for(let child of cajas.children){
        child.title = '';
    }
    console.log(cajas.children);
    if (selectedCharacter) selectedCharacter.title = 'Presentado';
}

// Se guarda la información recibida por el prompt en const user.
function botonclic() {
    user = prompt(`Who's showing up today'? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)`);
    console.log(user);
    // Se llama a la función setCompleteName
    setCompleteName();
    console.log(completeUserName.innerHTML);
    // Se llama a la función showedCharacter
    showedCharacter();
}

// Se utiliza un addEvenListener y el método e.target para agregar el título "Presentado" y mostrar a cada personaje clickeado

let cajas = document.getElementById('cajas');

cajas.addEventListener('click', (e) => {
    console.log(e.target.id);
    for(let child of cajas.children){
        child.title = '';
        if (e.target.id === 'mario') {
            e.target.title = 'Presentado';
        } else if (e.target.id === 'luigi') {
            e.target.title = 'Presentado';
        } else if (e.target.id === 'bowser') {
            e.target.title = 'Presentado';
        } else if (e.target.id === 'peach') {
            e.target.title = 'Presentado';
        } else if (e.target.id === 'yoshi') {
            e.target.title = 'Presentado';
        } else if (e.target.id === 'toad') {
            e.target.title = 'Presentado';
        } else if (e.target.id === 'daisy') {
            e.target.title = 'Presentado';
        } else if (e.target.id === 'toadette') {
            e.target.title = 'Presentado';
        } else {
            e.target.title = '';
        }
    }
});