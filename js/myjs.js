let ubicacion = window.pageYOffset;
window.onscroll = function () {
    let desplazamiento = window.pageYOffset
    if (window.screen.width <= 600){
        var remplus = "9rem";
        var remmin = "-9rem";
    }else if(window.screen.width <= 1024){
        var remplus = "14rem";
        var remmin = "-14rem";
    }else {
        var remplus = "10rem";
        var remmin = "-10rem";
    }
    if (ubicacion >= desplazamiento) {
        document.querySelector('.menu').style.top = "0";
        document.querySelector('.form_search_pk').style.top = remplus;
        document.querySelector('.myfooter').style.bottom = "0";
    } else {
        document.querySelector('.menu').style.top = remmin;
        document.querySelector('.form_search_pk').style.top = remmin;
        document.querySelector('.myfooter').style.bottom = remmin;
    }
    ubicacion = desplazamiento;
}
function showMenu() {
    var menu = document.querySelector('.menu_list');
    if (menu){
        menu.classList.toggle("show");
        var formSearchPK = document.querySelector('.form_search_pk');
        if (menu.classList.contains("show")) {
            formSearchPK.style.margin = "100rem 0 0 0";
            console.log("Se puso display none")
        } else {
            formSearchPK.style.margin = "0 0 0 0";
            console.log("Se puso display flex")
        }
    }
}