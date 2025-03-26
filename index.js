window.addEventListener("click", function(event){
    if(document.getElementById('navbar-botton').contains(event.target)){
        showHideDropwnMenu();
    }

    if(!document.getElementById('navbar-botton').contains(event.target) && document.getElementById("myDropDownMenu").style.display == "block"){
        hideDropwnMenu()
    }

    
})

function showHideDropwnMenu() {
    var miniMenu = document.getElementById("myDropDownMenu");
    if(miniMenu.style.display == ""){
        miniMenu.style.display = "flex";
        return true
    }
    else{
        miniMenu.style.display = "";
    }
}

function hideDropwnMenu(){
    document.getElementById("myDropDownMenu").style.display = ""
}



