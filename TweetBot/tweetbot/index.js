require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http').Server(app)

app.use(express.static(`${__dirname}/build/static`));

app.use('/', (req,res) => {
    res.send(`${__dirname}/build/index.html`);
})

http.listen(process.env.PORT, () => {
    console.log(`web server is running on port ${process.env.PORT}`)
})