
function hamburgerNav() {
    const navBar = document.getElementById("navBar")

    if (navBar.className === "nav") {
        navBar.className += " responsive";
    } else {
        navBar.className = "nav";
    }
}

// Animating 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let id = 0;

function createText() {
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.font = '5rem Oxygen';
    let x = Number(0);
    clearInterval(id);
    id = setInterval(animateText, 5);
    function animateText() {
        if (x == Number(canvas.height - 75)) {
            clearInterval(id);
            ctx.fillText('Alccro', canvas.width/10, canvas.height - 75);
        } else {
            x++;
            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx.fillText('Alccro', canvas.width/10, x);
        }
    }
}

createText();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    size = canvas.width < canvas.height ? canvas.width * 0.2 : canvas.height * 0.2;
    createText();
})