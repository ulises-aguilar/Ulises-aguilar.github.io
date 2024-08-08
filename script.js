document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = canvas.width / 20; // Width of each column
    const rows = canvas.height / 20; // Height of each row

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Characters used
    const drops = Array.from({ length: cols }).fill(0); // Initialize drop positions

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        ctx.fillStyle = 'rgba(0, 255, 0, 0.75)'; // Green color
        ctx.font = '20px monospace'; // Font size and type

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * 20, drops[i] * 20);

            // Reset drop position when it goes off screen
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 50); // Adjust speed by changing the interval

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
