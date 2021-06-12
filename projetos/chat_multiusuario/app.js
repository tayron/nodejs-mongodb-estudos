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
        // Envia mensagem do chat
        socket.emit('msgParaCliente', {
            apelido: dado.apelido,
            mensagem: dado.mensagem
        })

        socket.broadcast.emit('msgParaCliente', {
            apelido: dado.apelido,
            mensagem: dado.mensagem
        })

        // Atualiza lista de participantes
        if (parseInt(dado.apelido_atualizado_nos_clientes) === 0) {            
            socket.emit('participantesParaCliente', {
                apelido: dado.apelido
            })

            socket.broadcast.emit('participantesParaCliente', {
                apelido: dado.apelido
            })        
        }
    })
});