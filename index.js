
// require('@dotenvx/dotenvx').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('hello ' + process.env.HELLO);
    res.send(`Hello ${process.env.HELLO || ''}`);
});

app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`);
});



