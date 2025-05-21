
let current = 0;
const images = ["images/classroom1.jpg", "images/classroom2.jpg", "images/classroom3.jpg"];
const imgEl = document.getElementById('slider-image');

setInterval(() => {
  current = (current + 1) % images.length;
  imgEl.src = images[current];
}, 3000);
