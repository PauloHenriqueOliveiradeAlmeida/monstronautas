function showMenu(menuId, botaoId) {
    let menu = document.getElementById(menuId);

    if (menu.style.right != "0px") {
        menu.style.right = "0px";
    }
    else {
        menu.style.right = "";
    }
}