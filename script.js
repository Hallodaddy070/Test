const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let cameraOn = false;

document.getElementById("cameraBtn").onclick = () => {
    cameraOn = !cameraOn;
};

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (cameraOn) {
        // Camera view
        ctx.fillStyle = "darkblue";
        ctx.fillRect(0, 0, 800, 600);

        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("CAMERA VIEW", 280, 300);
    } else {
        // Office view
        ctx.fillStyle = "darkred";
        ctx.fillRect(0, 0, 800, 600);

        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("OFFICE", 320, 300);
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();