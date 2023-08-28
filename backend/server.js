const express = require('express');
const cors = require('cors');
const router = require('./routes/project.router');
const app = express();
const port = 7373;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/images',express.static('/images'));
app.use('/videos',express.static('/videos'));
app.use('/',router);

app.listen(port,() =>{
    console.log(`Sereve Has Running On ${port}`)
});