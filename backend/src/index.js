const express = require('express');
const cors = require('cors');

require('./database');

const app = express();

app.use(cors());

//Preciso dizer pro express que estou trabalhando com json
app.use(express.json());

//Declarando router
app.use(require('./routes'));

//Server listener
const port = process.env.port || 3003;
console.log(`Server is listening on Port ${port}`)
app.listen(port);