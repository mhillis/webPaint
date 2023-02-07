var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var isMouseDown = false;
ctx.lineWidth = 5; //setting default line width
//Event listeners for drawing (mousedown, mousemove, mouseup) on canvas DOM
canvas.addEventListener("mousedown", function (evt){
    var mousePos = getMousePos(canvas, evt);
    mouseDown(mousePos.x,mousePos.y);
}, false);

canvas.addEventListener("mousemove", function (evt) {
    mousePos = getMousePos(canvas,evt);
    mouseMove(mousePos.x, mousePos.y);
});
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mouseout", mouseUp)


function mouseDown(x,y){
    //stuff
    isMouseDown = true;
    ctx.moveTo(x,y);
    ctx.beginPath();
    
}
function mouseMove(x,y){
    //stuff
    //check if mouseDown if so do this
    if(isMouseDown){
    ctx.lineTo(x,y);
    ctx.stroke();
    }
}
//stop drawing when user releases mousebutton or goes off canvas
function mouseUp(){
    isMouseDown = false;
    ctx.closePath();
    
}

//getting mouse position returning a object with a x and y value
function getMousePos(canvas, evt){
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//called whenever an attribute of the paintbruh is changed i.e color, size
function updateBrush(){
    ctx.lineWidth = document.getElementById("inputBrushSize").value;
    ctx.strokeStyle = document.getElementById("colorPicker").value;
}

//save canvas as image file
function saveCanvas(){
    //code pop up that asks where to save image
}