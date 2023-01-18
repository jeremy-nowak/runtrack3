document.addEventListener("DOMContentLoaded",function(){

    const button = document.querySelector("#button");

        button.addEventListener("click", citation);

    function citation(){

        const txt = document.querySelector("#citation");
        const result = txt.textContent;

        console.log(result);
    }
});