let textoUsuario = 0;
let textoNuevo =0;

console.log(textoUsuario);

function verificarIntento(){
    textoUsuario = document.getElementById("valorUsuario");
    if (textoUsuario=="e"){
        textoNuevo="enter";
    }
    
    if (textoUsuario=="i"){
        textoNuevo="imes";
    
    }
    if (textoUsuario=="a"){
        textoNuevo="ai";
    
    }
    if (textoUsuario=="o"){
        textoNuevo="ober"
    
    }
    if (textoUsuario=="u"){
        textoNuevo="ufat"
    
    }
}
