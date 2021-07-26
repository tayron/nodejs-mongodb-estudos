/* importar as configurações do servidor */
var app = require('./config/server');
const portaAplicacao = 3000
/* parametrizar a porta de escuta */
app.listen(portaAplicacao, function(){
	console.log(`Servidor online: http://localhost:${portaAplicacao}` );
})