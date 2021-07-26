const mongoClient = require('mongodb').MongoClient
const url = 'mongodb://172.19.0.3/game_of_throne'

var connMonogoDB = function() {       
    mongoClient.connect(url, function(err, db){        
        const listaUsuarios = db.collection('usuarios').find()
        
        listaUsuarios.each(function(err, documento){
            console.log(documento)
        })
    })
}

module.exports = function() {
    return connMonogoDB
}