var ancla = document.getElementsByClassName('f-text');
var cont = 0;


function accion() {

    for (var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('hide');
    }
}

function inicio() {

    setInterval(changeImg, 3000);
    
    }
    
    window.onload=inicio;

function changeImg(){
//     var cont;
//     if (cont==0){
//     document.getElementById("image").src="resources/Salones.png";
//     cont=1;
// }
// if (cont==1){
//     document.getElementById("image").src="resources/Salas mac 2.png";
//     cont = 0;
// }




}

var estado=true;

setTimeout("cambio()",500);

function cambio()

{

estado=!estado;

if(estado==true)

img.src="Imagen 1"

else

img.src="Imagen 2"

setTimeout("cambio()",500);

}

