let palabras = ["colores","maestra","recreo","campana"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";


function iniciarJuego(){
    document.getElementById(iniciarJuego).style.display=none;

}
function escogerPalabraSecreta(){
    let palabra = palabras[i];
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;



}
