let palabras = ["MENDOZA","CORDOBA","NEUQUEN","SALTA"];
let tablero = document.getElementById("la-horca").getContext("2d");


let palabraSecreta = "";
let letras = [];
let errores = 9;

function escogerPalabraSecreta(){
     let palabra = palabras[Math.floor(Math.random()* palabras.length)];
     palabraSecreta = palabra;
        console.log(palabraSecreta);
}
function comprobarLetra(key){
    let estado = false
    if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        console.log(key);
        return estado
    }else{
        estado=true
        console.log(key)
        return estado
    }
}

function iniciarJuego(){

    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("tituloh1").style.display ="none";
   
    escogerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()

    document.onkeydown =(e) => {
        let letra = e.key.toUpperCase();
        comprobarLetra(letra);

        if( comprobarLetra(letra)&& palabraSecreta.includes(letra)){
            for(let i =0; i < palabraSecreta.length;i++){
                if (palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);   
                }   
            }
        }else{
            anadirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra,errores);
            anadirParteMuneco(errores);
        }
    }   
}
function funcionesClave(){
    iniciarJuego();
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
}

function gameOver(){
    alert("Perdiste intentalo de nuevo");
    funcionesClave();
   
}

function anadirLetraIncorrecta(){
    errores -= 1;
}  


function anadirParteMuneco(errores){
    if(errores==8){
        dibujarPrimeraLinea(errores);
    }
    if(errores==7){
        dibujarSegundaLinea(errores);
    }
    if(errores==6){
        dibujarTercerLinea(errores);
    }
    if(errores==5){
        dibujarCabeza(errores);
    }
    if(errores==4){
        dibujarTronco(errores);
    }
    if(errores==3){
        dibujarPiernaderecha(errores);
    }
    if(errores==2){
        dibujarPiernaizq(errores);
    }
    if(errores==1){
        dibujarBrazoDerecho(errores);
    }

    if(errores==0){
        dibujarBrazoIzq(errores);
        gameOver();
    }
}
function agregarPalabra(){
    nuevaPalabra = prompt("Ingrese una palabra en mayusculas");
    palabras.push(nuevaPalabra);
    console.log(palabras)
    funcionesClave();
}
