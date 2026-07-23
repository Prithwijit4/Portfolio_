// dot canvas ----->
const canvas = document.getElementById("dots");
const ctx = canvas.getContext("2d");

let mouse = {
  x: -9999,
  y: -9999
};

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gap = 24;

  for(let x = 0; x < canvas.width; x += gap){
    for(let y = 0; y < canvas.height; y += gap){

      const dx = x - mouse.x;
      const dy = y - mouse.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      let dotX = x;
      let dotY = y;

      if(distance < 120){

        const force = (120 - distance) / 120;

        dotX += (dx / distance) * force * 20;
        dotY += (dy / distance) * force * 20;
      }

      ctx.beginPath();
      ctx.arc(dotX, dotY, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,0,0,.15)";
      ctx.fill();
    }
  }

  requestAnimationFrame(draw);
}

resizeCanvas();
draw();

window.addEventListener("resize", resizeCanvas);











// circle cursor ---->

const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {

    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {
        cursor.style.transform =
            "translate(-50%, -50%) scale(1.7)";
    });

    link.addEventListener("mouseleave", () => {
        cursor.style.transform =
            "translate(-50%, -50%) scale(1)";
    });

});