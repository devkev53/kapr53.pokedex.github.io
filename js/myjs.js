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