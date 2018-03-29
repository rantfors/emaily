const express = require('express');
const app = express();

// Route handeler
app.get('/', (req, res) => {
  res.send({ hi: 'there all!!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
