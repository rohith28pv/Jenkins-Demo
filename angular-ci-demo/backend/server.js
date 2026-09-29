const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Node.js Backend!',
    service: 'Jenkins Demo API'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
