var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<html><body><h1>Pagina inicial</h1></body></html>");
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body><h1>Notícias de tecnologias</h1></body></html>");
});

app.listen(3000, function(){
    console.log("Servidor startado na porta http://127.0.0.1:3000");
});