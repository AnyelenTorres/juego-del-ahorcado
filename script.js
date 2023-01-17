let palabras = ["colores","maestra","recreo","campana"];
let tablero = document.getElementById("canvas").getContext("2d");
let palabraSecreta = "";


function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("salir").style.display = "none";
    document.getElementById("tituloh1").style.display ="none";
    escogerPalabraSecreta();
}


function escogerPalabraSecreta(){
    
    let palabra = palabras[Math.floor(Math.random()* palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);

}
