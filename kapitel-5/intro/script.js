// Ställt in canvas för att börja rita
const canvas = document.querySelector('canvas');
ctx = canvas.getContext('2d');

// // Rita en fyrkant
// ctx.fillStyle = "royalblue"
// ctx.fillRect(50, 50, 150, 100);

// // Rita en till fyrkant
// ctx.fillStyle = "purple"
// ctx.fillRect(250, 50, 150, 100);

// // Rita en till fyrkant
// ctx.fillStyle = "#999"
// ctx.fillRect(450, 50, 150, 100);

// // Rita en fyrkant
// ctx.fillStyle = "yellow"
// ctx.fillRect(50, 200, 150, 100);

// ctx.fillStyle = "brown"
// ctx.fillRect(150, 200, 150, 100);

// Rita Sveriges flagga
ctx.fillStyle = "#006aa7"
ctx.fillRect(50, 50, 500, 300);
ctx.fillStyle = "#fecc00";
ctx.fillRect(50, 170, 500, 50);
ctx.fillRect(250, 50, 50, 300);

// Rita en tom rektangel
// Kant = stroke?
ctx.strokeStyle = "red";
ctx.lineWidth = 7;
ctx.strokeRect(25, 25, 550, 350);