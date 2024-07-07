const offCanvas = document.getElementById('offCanvas')

function offCanvasExtend(){
    offCanvas.style.width = "350px";
    offCanvas.style.border = "5px solid var(--teal)"
    console.log('extend');
}

function offCanvasClose(){
    offCanvas.style.width = "0px";
    offCanvas.style.border = "0px"
    console.log('close');
}