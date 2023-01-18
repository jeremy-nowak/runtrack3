document.addEventListener("keypress",function(event){
  let keyLogger = document.querySelector("#keyLogger")
  let currentFocus = document.activeElement;

  keyLogger.value += event.key;
});