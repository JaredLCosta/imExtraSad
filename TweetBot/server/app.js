require('dotenv').config();
require('./db.js');

const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https').Server(app);

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));
app.use('/api/user', require("./routes/user"));
app.use('/api/login', require('./routes/session'));
app.use('/api/definition', require('./routes/definition'));
app.use('/api/log', require('./routes/log'));
app.use('/api/tweet', require('./routes/tweet'));
app.listen(process.env.PORT, function(){
    console.log(`app is runnign on ${process.env.PORT}`);
})