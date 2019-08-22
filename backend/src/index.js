const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Conexão com o Mongo
mongoose.connect('mongodb://gros:mongo123@ds045077.mlab.com:45077/projectphotocopy',{ 
    useNewUrlParser: true 
});

app.use(cors());

//Preciso dizer pro express que estou trabalhando com json
app.use(express.json());

//Declarando router
app.use(require('./routes'));

//Server listener
const port = process.env.port || 3003;
console.log(`Server is listening on Port ${port}`)
app.listen(port);