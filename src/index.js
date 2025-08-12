const express = require('express');
const app = express();
const port = 3000;

// Serve Coming Soon page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Coming Soon</title>
            <style>
                body {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    height: 100vh;
                    margin: 0;
                    text-align: center;
                }
                h1 {
                    font-size: 3.5rem;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 1.5rem;
                    margin-bottom: 20px;
                }
                .countdown {
                    font-size: 2rem;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h1>🚀 Coming Soon</h1>
            <p>We are working hard to bring you something amazing!</p>
            <div class="countdown" id="countdown">Loading countdown...</div>
            <script>
                const targetDate = new Date();
                targetDate.setDate(targetDate.getDate() + 7);
                function updateCountdown() {
                    const now = new Date();
                    const diff = targetDate - now;
                    if (diff <= 0) {
                        document.getElementById("countdown").innerHTML = "We are live!";
                        return;
                    }
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((diff / (1000 * 60)) % 60);
                    const seconds = Math.floor((diff / 1000) % 60);
                    document.getElementById("countdown").innerHTML =
                        \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;
                }
                setInterval(updateCountdown, 1000);
                updateCountdown();
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
