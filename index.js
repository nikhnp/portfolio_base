const offCanvas = document.getElementById('offCanvas')
const offCanvasBase = document.getElementById('offCanvasBase')

function offCanvasExtend(){
    offCanvas.style.width = "350px";
    offCanvas.style.border = "5px solid var(--teal)";
    offCanvasBase.style.width = "100vw";
}

function offCanvasClose(){
    offCanvas.style.width = "0px";
    offCanvas.style.border = "0px";
    offCanvasBase.style.width = "0px";
}