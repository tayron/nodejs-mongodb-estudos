var app = require('./config/server')

var server = app.listen(3000, function(){
    console.log('Servidor online')
})

var io = require('socket.io')(server)

app.set('io', io)

io.on('connection', function(socket){
    console.info('Usuário conectou!')

    socket.on('disconnect', function(){
        console.log('Usuário desconectou!');        
    })

    socket.on('msgParaServidor', function(dado){
        socket.emit('msgParaCliente', {
            apelido: dado.apelido,
            mensagem: dado.mensagem
        })

        socket.broadcast.emit('msgParaCliente', {
            apelido: dado.apelido,
            mensagem: dado.mensagem
        })
    })
});