document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const charSize = 20; // Size of each character
    const cols = Math.floor(canvas.width / charSize); // Number of columns
    const rows = Math.floor(canvas.height / charSize); // Number of rows

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?'; // Expanded character set
    const drops = Array.from({ length: cols }).fill(0); // Initialize drop positions
    const dropSpeeds = Array.from({ length: cols }).map(() => Math.random() * 3 + 2); // Random speeds

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        ctx.fillStyle = 'rgba(0, 255, 0, 0.75)'; // Green color
        ctx.font = `${charSize}px monospace`; // Font size and type

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * charSize, drops[i] * charSize);

            // Reset drop position when it goes off screen
            if (drops[i] * charSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i] += dropSpeeds[i]; // Use the speed for each drop
        }
    }

    setInterval(draw, 15); // Adjust speed by changing the interval

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
