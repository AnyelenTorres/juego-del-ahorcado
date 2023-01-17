function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle= "#f28110";
    tablero.strokeStyle ="#f0f07d";
+   
    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.closePath();
}


function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

 let anchura = 600/palabraSecreta.length;
    
    for (let i = 0 ; i < palabraSecreta.length; i++){
    tablero.moveTo(500 + (anchura *i), 640);
    tablero.lineTo(550 + (anchura *i), 640);
    }   

tablero.stroke();
tablero.closePath();
}


function escribirLetraCorrecta(index){
    tablero.font = "bold 52px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6"
    
    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],505+(anchura*index),620);
    tablero.stroke()
}
function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth=6
    tablero.font = 'bold 40px Inter';
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#0A3871"
    tablero.fillText(letra,505+(40*(10-errorsLeft)), 720,40);
  }
//horca
function dibujarPrimeraLinea(errores){
    
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    tablero.moveTo(700 , 500);
    tablero.lineTo(700 , 200);
    tablero.stroke();
    tablero.closePath();
      
}   
    
function dibujarSegundaLinea(errores){    
        tablero.lineWidth = 8;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#0A3871";
        tablero.moveTo(700 , 200);
        tablero.lineTo(800 , 200);
        tablero.stroke();
        tablero.closePath();
    }

function dibujarTercerLinea(errores){
        tablero.lineWidth = 8;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#0A3871";
        tablero.moveTo(800 , 200);
        tablero.lineTo(800 , 250);
        tablero.stroke();
        tablero.closePath();
    }
    function dibujarCabeza(errores){
		tablero.fillStyle = "#F3F5F6";
		tablero.beginPath();
		tablero.arc(800,285,35,0,2*Math.PI);
		
	}	
    function dibujarTronco(errores){
        tablero.lineWidth = 8;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#0A3871";
        tablero.moveTo(800 , 320);
        tablero.lineTo(800 , 400);
        tablero.stroke();
        tablero.closePath();

    }

    function dibujarPiernaderecha(errores){
        tablero.lineWidth = 8;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#0A3871";
        tablero.moveTo(800 , 400);
        tablero.lineTo(850 , 450);
        tablero.stroke();
        tablero.closePath();
    }
    function dibujarPiernaizq(errores){
        tablero.lineWidth = 8;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#0A3871";
        tablero.moveTo(800 , 400);
        tablero.lineTo(750 , 450);
        tablero.stroke();
        tablero.closePath();
    }
    function dibujarBrazoDerecho(errores){

        tablero.lineWidth = 8;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#0A3871";
        tablero.moveTo(800 , 340);
        tablero.lineTo(850 , 300);
        tablero.stroke();
        tablero.closePath();
    }
    function  dibujarBrazoIzq(errores){

        tablero.lineWidth = 8;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#0A3871";
        tablero.moveTo(800 , 340);
        tablero.lineTo(750 , 300);
        tablero.stroke();
        tablero.closePath();
    }
	
