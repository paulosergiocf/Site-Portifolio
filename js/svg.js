document.addEventListener("DOMContentLoaded", function() {
    var svgs = ["img/1.svg", "img/2.svg", "img/3.svg", "img/4.svg", "img/5.svg"];
    var index = 0;
    var svgElement = document.getElementById("svg");

    function changeSVG() {
        setTimeout(function() {
            index = (index + 1) % svgs.length;
            svgElement.src = svgs[index];
        }, 500); // Tempo de transição em milissegundos
    }

    setInterval(changeSVG, 1000); // Troca de SVG a cada 2 segundos
});