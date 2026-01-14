// Väljer canvas att rita i
const canvas = document.querySelector('canvas');

// Väljer 2D-verktygen
const ctx = canvas.getContext('2d');

// Rita en rosa fyrkant
// Välj fyllningsfärg
// ctx.fillStyle = 'pink';
// ctx.fillRect(100, 100, 125, 75); // x, y, b, h

// Rita lila fyrkant med bara kontur
// ctx.strokeStyle = "purple";
// ctx.lineWidth = 10;
// ctx.strokeRect(300, 100, 200, 150); // x, y, b, h

// Rita den grekiska flaggan
// Rita korset
ctx.fillStyle = "#014488";
ctx.fillRect(0, 0, 200, 150);

ctx.fillRect(0, 0, 500, 50);
ctx.fillRect(0, 100, 500, 50);
ctx.fillRect(0, 200, 500, 50);

ctx.fillStyle = "#fff";
ctx.fillRect(80, 0, 50, 150);
ctx.fillRect(0, 60, 200, 50);