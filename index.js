var express = require('express');
var app = express();
/*app.get('/', function (req, res) {
    res.send('Hello World');
});*/

app.get('/dodaj', function(req, res){
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    let result = num1 + num2;
    res.send(`Wynik dodawania to: ${result}`);
});

app.get('/usun', function(req, res){
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    let result = num1 - num2;
    res.send(`Wynik dodawania to: ${result}`);
});

app.get('/podziel', function(req, res){
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    let result = num1 / num2;
    res.send(`Wynik dodawania to: ${result}`);
});

app.get('/pomnoz', function(req, res){
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    let result = num1 * num2;
    res.send(`Wynik dodawania to: ${result}`);
});
//cos
app.listen(3000);
