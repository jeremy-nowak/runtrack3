document.addEventListener("DOMContentLoaded",function(){

    const button = document.querySelector("#button");
    button.addEventListener("click", showHide)

    function showHide() {
        const text = document.querySelector("#citation");
        if (text.style.display === "none") {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }
})

// document.getElementById("button").addEventListener(
//     "click",
//     () => {
//       document.getElementById("#nothing").hidden = true;
//       document.getElementById("#citation").hidden = false;
//     },
//     false
//   );
  