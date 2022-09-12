function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.line.Join = "round";
    tablero.fillStyle = "#f67b7b";
    tablero.strokeStyle = "8A3871";

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.closePath();


}

function dibujarLinea(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.line.Join = "round";
    tablero.fillStyle = "#f67b7b";
    tablero.strokeStyle = "8A3871";

    let anchura= 600/palabraSecreta.length;
    
    for (let i = 0 ; i < palabraSecreta.length; i++){
    tablero.moveTo(500 + (anchura * i),640);
    tablero.lineTo(500 + (anchura * i),640);
    }   
}
tablero.stroke();
tablero.closePath();