// proyecto de js //

console.log(document.title + '\n------------------------------------')

// Creación de los elementos HTML y asignación de variables

var rform = document.getElementById ('form');
var rform2 = document.getElementById ('form2');

rform.addEventListener ('submit', submitform)
rform2.addEventListener ('submit', submitform)

// Por medio de este método evitamos que se recargue la página al enviar el form.
function submitform (event) {
    event.preventDefault ()  
}


var colorCoincidence;
var colorCoincidenceLastName;

// Función que captura los datos enviados en el formulario, evalúa si existen coincidencias y agrega el color seleccionado por el usuario
function datescapture () {
    var member1FirstName = document.getElementById ('fname').value;
    var member1SecondName = document.getElementById ('sname').value;
    var member1FirstLastName = document.getElementById ('flname').value;
    var member1SecondLastName = document.getElementById ('slname').value;
    
    var member2FirstName = document.getElementById ('fname2').value;
    var member2SecondName = document.getElementById ('sname2').value;
    var member2FirstLastName = document.getElementById ('flname2').value;
    var member2SecondLastName = document.getElementById ('slname2').value;

    var dd11;
    (member1FirstName.length > 0) ? (dd11 = (member1FirstName+' ')) : (dd11 = (member1FirstName.replace()));
    if (member1SecondName.length === 0) {
        dd11 = (member1FirstName)
    } 
    var dd22;
    (member1SecondName.length > 0) ? (dd22 = (member1SecondName+' ')) : (dd22 = (member1SecondName.replace()));
    if (member1FirstLastName.length === 0) {
        dd22 = (member1SecondName)
    }
    var dd33;
    (member1FirstLastName.length > 0) ? (dd33 = (member1FirstLastName+' ')) : (dd33 = (member1FirstLastName.replace()))
    // En el console.log identificamos que los apellidos de Integrante 1 se unen, es decir no se deja el espacio entre las dos palabras. Después de revisar varias fuentes e insistir en la revisión del código y los condicionales encontramos que es igual, en su lógica, al de los apellidos del integrante 2, sin embargo, en este último si se genera el espacio. Desconocemos la causa, agradecemos el feedback.

    if (member1SecondLastName > 0) {
        var dd44 = (member1SecondLastName)
    }else {
        dd44 = (member1SecondLastName.replace())
        dd33 = (member1FirstLastName)
    }

    //------------------------------------------------------------------------------------------------------
    
    var dd55;
    (member2FirstName.length > 0) ? (dd55 = (member2FirstName+' ')) : (dd55 = (member2FirstName.replace()));
    if (member2SecondName.length === 0) {
        dd55 = (member2FirstName)
    }
    var dd66;
    (member2SecondName.length > 0) ? (dd66 = (member2SecondName+' ')) : (dd66 = (member2SecondName.replace()));
    if (member2FirstLastName.length === 0) {
        dd66 = (member2SecondName)
    }
    var dd77;
    (member2FirstLastName.length > 0) ? (dd77 = (member2FirstLastName+' ')) : (dd77 = (member2FirstLastName.replace()));
    if (member2SecondLastName) {
        var dd88 = (member2SecondLastName)
    }else {
        dd88 = (member2SecondLastName.replace())
        dd77 = (member2FirstLastName)
    }

    console.log ('```\n-----\nIntegrante1 : "'+ dd11 + dd22 + dd33 + dd44 + '"\nIntegrante2 : "' + dd55 + dd66 + dd77 + dd88 + '"\n-----\n```')

    if (member1FirstName === '' && member2FirstName === '') {

    }else if (member1FirstName === member2FirstName) {
        colorCoincidence = prompt('Existen coincidencias en los nombres: '+ member1FirstName + '\n ¿Con qué color quieres que se muestren las coincidencias?', 'color')
        document.getElementById ('fname').style.color = colorCoincidence;
        document.getElementById ('fname2').style.color = colorCoincidence;
    }else {
        console.log ('Integrante1 Nombre1, Integrante2 Nombre1: No hubo coincidencias')
    }
    if (member1FirstName === '' && member2SecondName === '') {

    }else if (member1FirstName === member2SecondName) {
        colorCoincidence = prompt('Existen coincidencias en los nombres: '+ member1FirstName + '\n ¿Con qué color quieres que se muestren las coincidencias?', 'color')
        document.getElementById ('fname').style.color = colorCoincidence;
        document.getElementById ('sname2').style.color = colorCoincidence;
    }else {
        console.log ('Integrante Nombre1, Integrante Nombre2: No hubo coincidencias')
    }
    if (member1SecondName === '' && member2SecondName === '') {

    }else if (member1SecondName === member2SecondName) {
        colorCoincidence = prompt('Existen coincidencias en los nombres: '+ member1SecondName + '\n ¿Con qué color quieres que se muestren las coincidencias?', 'color')
        document.getElementById ('sname').style.color = colorCoincidence;
        document.getElementById ('sname2').style.color = colorCoincidence;
    }else {
        console.log ('Integrante1 Nombre2, Integrante2 Nombre2: No hubo coincidencias')
    }
    if (member1SecondName === '' && member2FirstName === '') {

    }else if (member1SecondName === member2FirstName) {
        colorCoincidence = prompt('Existen coincidencias en los nombres: '+ member1SecondName + '\n ¿Con qué color quieres que se muestren las coincidencias?', 'color')
        document.getElementById ('sname').style.color = colorCoincidence;
        document.getElementById ('fname2').style.color = colorCoincidence;
    }else {
        console.log ('Integrante1 Nombre2, Integrante2 Nombre1: No hubo coincidencias')
    }

    //LastNames----------------------------------
    
    if (member1FirstLastName === '' && member2FirstLastName === '') {

    }else if (member1FirstLastName === member2FirstLastName) {
        colorCoincidence = prompt('Existen coincidencias en los Apellidos: '+ member1FirstLastName + '\n ¿Con qué color quieres que se muestren las coincidencias?', 'color')
        document.getElementById ('flname').style.color = colorCoincidence;
        document.getElementById ('flname2').style.color = colorCoincidence;
    }else {
        console.log ('Integrante1 apellido1, Integrante2 apellido1: No hubo coincidencias')
    }
    if (member1FirstLastName === '' && member2SecondLastName === '') {

    }else if (member1FirstLastName === member2SecondLastName) {
        colorCoincidence = prompt('Existen coincidencias en los Apellidos: '+ member1FirstLastName + '\n ¿Con qué color quieres que se muestren las coincidencias?', 'color')
        document.getElementById ('flname').style.color = colorCoincidence;
        document.getElementById ('slname2').style.color = colorCoincidence;
    }else {
        console.log ('Integrante1 apellido1, Integrante2 apellido2: No hubo coincidencias')
    }
    if (member1SecondLastName === '' && member2SecondLastName === '') {

    }else if (member1SecondLastName === member2SecondLastName) {
        colorCoincidence = prompt('Existen coincidencias en los Apellidos: '+ member1SecondLastName + '\n ¿Con qué color quieres que se muestren las coincidencias?', 'color')
        document.getElementById ('slname').style.color = colorCoincidence;
        document.getElementById ('slname2').style.color = colorCoincidence;
    }else {
        console.log ('Integrante1 apellido2, Integrante2 apellido2: No hubo coincidencias')
    }
    if (member1SecondLastName === '' && member2FirstLastName === '') {

    }else if (member1SecondLastName === member2FirstLastName) {
        colorCoincidence = prompt('Existen coincidencias en los Apellidos: '+ member1SecondLastName + '\n ¿Con qué color quieres que se muestren las coincidencias?', 'color')
        document.getElementById ('slname').style.color = colorCoincidence;
        document.getElementById ('flname2').style.color = colorCoincidence;
    }else {
        console.log ('Integrante1 apellido2, Integrante2 apellido1: No hubo coincidencias')
    }
}