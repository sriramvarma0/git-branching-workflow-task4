const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from DevOps Task 4 Node.js App!');
});

// Example API route
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
