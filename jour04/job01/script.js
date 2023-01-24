
  document.addEventListener("DOMContentLoaded",function(){

    const button = document.querySelector("#button");
    
    
    
button.addEventListener("click", sendText);
    
    function sendText() {

      const text = document.createElement("p");

      fetch('expression.txt')
      .then((response) => response.text())
      .then((data) => (text.innerHTML = data
        ));

        const corps = document.querySelector("body");

        corps.appendChild(text)
  }
   })
   



