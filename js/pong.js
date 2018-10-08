var animate = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function(callback) { window.setTimeout(callback, 1000/60) };

var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

window.onload = () => {
    document.body.appendChild(canvas);
    animate(step);
};

var step = () => {
    update();
    render();
    animate(step);
};

var update = () => { 

};

var render = () => {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, width, height);
};