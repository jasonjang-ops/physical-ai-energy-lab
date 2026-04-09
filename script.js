function searchIEEE(){
    let q = document.getElementById("searchbox").value;
    window.open("https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=" + encodeURIComponent(q));
}
function searchIEEK(){
    let q = document.getElementById("searchbox").value;
    window.open("https://www.dbpia.co.kr/search/searchList?query=" + encodeURIComponent(q));
}

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() { this.x += this.speedX; this.y += this.speedY; }
    draw() { ctx.fillStyle = 'rgba(56, 189, 248, 0.3)'; ctx.beginPath(); ctx.arc(this.x, this.y, 1, 0, Math.PI * 2); ctx.fill(); }
}
function init() { for (let i = 0; i < 100; i++) particles.push(new Particle()); }
function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
init(); animate();
