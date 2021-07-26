function UsuariosDAO(connection){
    this._connection = connection()
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    console.warn(this._connection)
    this._connection.collection('usuarios', function(err, collection) {
        collection.insert(usuario)
    })    
}


module.exports = function(){
    return UsuariosDAO
}