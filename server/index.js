const express = require("express");

const app = express()

app.get('/', (req, res) => {
    res.send('Hola mundo ddd');
  });

app.listen(80, ()=> {console.log('servidor andando pa')})


