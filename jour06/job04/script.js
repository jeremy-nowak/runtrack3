
document.addEventListener("DOMContentLoaded", function() {

    const navbar = document.querySelector("#navbar");
     
    const burger = document.querySelector("#burger");
    
    const burger_navbar = document.querySelector("#burger_navbar");
    burger_navbar.style.display = "none";
    

    burger.addEventListener("click", function() {


        if(burger_navbar.style.display == "none") burger_navbar.style.display = "block"

        else burger_navbar.style.display = "none"
    
    }
    
    )
    
    
    });
    
