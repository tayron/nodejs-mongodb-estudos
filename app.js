var app = require("./config/server");

require("./app/routes/noticias")(app);
require("./app/routes/home")(app);
require("./app/routes/formulario_inclusao_noticia")(app);

app.listen(3000, function(){
    console.log("Servidor startado na porta http://127.0.0.1:3000");
});