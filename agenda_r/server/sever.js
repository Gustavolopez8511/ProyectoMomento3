const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());
 
app.use(require("./controllers/agendaC.js"));


 //
mongoose.connect('mongodb://localhost:27017/agenda',{
    useNewUrlParser: true,
    useUniFiedTopology: true
}, (err, res) => {
  if(err)throw err;
  console.log("Conectado a la DB");

});

let port = process.env.PORT || 3000;


app.listen(port, () => {
console.log('Servidor ONLINE en el puerto ${ port}');
});