document.addEventListener("DOMContentLoaded",function(){

    const button = document.querySelector("#button");
    
    
button.addEventListener("click", addOne);
    
    function addOne() {
      let compteur = document.querySelector("#compteur");
      compteur.innerHTML++;
    }

   

    
})