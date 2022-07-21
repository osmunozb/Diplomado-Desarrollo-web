// cambio de color del navbar
var barra = document.getElementById("navx");
window.onscroll = function funcionNav () { 

    if (document.documentElement.scrollTop >= 300) {
       

        barra.classList.add("bg-opacity-100");
        barra.classList.remove("bg-opacity-10");
    } 
    else {
        
        barra.classList.add("bg-opacity-10");
        barra.classList.remove("bg-opacity-100");
    }
};