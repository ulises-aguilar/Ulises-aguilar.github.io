document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Customize the number of columns here
    const numOfColumns = 150; // Change this value to increase/decrease columns
    let charSize = canvas.width / numOfColumns; // Calculate character size based on canvas width

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?/~`\\'; 
    const drops = Array.from({ length: numOfColumns }).fill(0); // Initialize drop positions
    const dropSpeeds = Array.from({ length: numOfColumns }).map(() => Math.random() * 2 + 1); // Random speeds

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

    setInterval(draw, 20); // Adjust speed by changing the interval

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        charSize = canvas.width / numOfColumns; // Recalculate character size on resize
    });
});
