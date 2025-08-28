// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function isValidString(str) {
    //The str must have only letters and a lenght > 0
    return ((str.length > 0) && (/^[a-zA-Z]+((\s)+[a-zA-Z]+)*$/.test(str)) && (!(listaAmigos.map (s => s.toLowerCase()).includes(str.toLowerCase()))));
}

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    amigoStr = amigoInput.value.trim().replace(/\s+/g, ' ');
    if (isValidString(amigoStr))
        listaAmigos[++amigoSecreto] = amigoStr;    
    else {
        alert('Input string should contain only letters, length greather than 0 and not be repeated');
        return;
    }
    actualizarLista();
    amigoInput.value = '';
    amigoInput.focus();
}

function sortearAmigo() {
    if (amigoSecreto < 0)
        alert('Must input several friends to guess a secret one');
    else 
        alert('Secret friend is "'+ listaAmigos[Math.floor(Math.random()*listaAmigos.length)]+'"'); 
    condicionesIniciales();
}

function actualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpia la lista anterior

    // Recorre el arreglo y crea <li> para cada nombre
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function condicionesIniciales() {
    amigoSecreto = -1;
    listaAmigos = [];
    let amigoInput = document.getElementById('amigo');
    amigoInput.value = '';
    amigoInput.focus();
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpia la lista anterior
}

let amigoSecreto = -1;
let listaAmigos = [];
condicionesIniciales();