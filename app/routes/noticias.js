module.exports = function(application){
    application.get('/noticia', function(req, res){
        application.app.controllers.noticias.noticia(application, res);         
    });
        
    application.get('/noticias', function(req, res){
        application.app.controllers.noticias.noticias(application, res);              
    });   
}