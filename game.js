// Oyun başlangıcı
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Oyun ayarları
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startGame() {
  // Basit bir arka plan rengi
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Oyun başlatılıyor
startGame();
