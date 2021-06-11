# Curso NodeJS e MongoDB

Desenvolvimento de aplicações Web com NodeJS e MongoDB

## Entendendo as tecnologias:

### O que é NodeJS?

O NodeJS é uma plataforma de execução de códigos JavaScript que permite ao programador desenvolver aplicações web utilizando o JavaScript como linguagem de back-end. Com NodeJS você poderá criar servidores facilmente escaláveis capazes de responder a milhares de requisições simultâneas sem dar deadlock ou negá-las.

#### O que é MongoDB?

O MongoDB é um banco de dados No-SQL (não relacional) cuja utilização está em ascensão. Trata-se de uma aplicação de código fonte aberto, de alta performance, sem esquemas, orientado a documentos.

### Módulos utilizados no estudo:

* **Consign:** Para realizar autoload de módulos
* **Body-parser:** Para receber parâmetros de formulários trafegados em requests.
* **Express-validator:** Para validação de dados
* **Express-session:** Para criação de variáveis de sessão
* **Crypto:** Para criptografia de dados utilizando MD5
* **Connect-Multiparty:** Para upload de arquivos


#### Projetos criados no curso

- **Portal de notícias:** O objetivo deste projeto é introduzi-lo ao universo NodeJS. Vamos criar uma aplicação simples, mas funcional, com recursos básicos e fundamentais para utilizar de forma produtiva a plataforma NodeJS.

- **Chat multiusuário:** O objetivo deste projeto consiste em aprendermos o recurso de websockets, uma tecnologia que permite a comunicação bi-direcional entre clientes (browsers) e servidores, com esta tecnologia é possível criar aplicações em real-time e quebrar o paradigma de que requisições são feitas apenas por parte do cliente.

- **MMORPG baseado na série de TV Game Of Thrones:** O objetivo deste projeto consiste em integrar uma aplicação NodeJS com o banco de dados MongoDB demonstrando na prática como realizar as 4 operações básicas de inclusão, consulta, atualização e remoção de documentos. Neste projeto também será ensinado o método de autenticação por sessão para controle de páginas restritas da aplicação.

- **Instagram Clone:** O Objetivo deste projeto consiste na criação de uma API RESTful em conjunto com uma aplicação web cliente baseada no Instagram. Neste módulo iremos nos aprofundar um pouco mais no protocolo HTTP e aprenderemos a utilizar além dos tradicionais métodos POST e GET os métodos PUT e DELETE.

#### Comandos utilizados
* Adicioanndo NPM ao projeto
```sh
npm init
```

* Express - Famework NodeJS para aplicação WEB
```sh
npm install express -save
```

* EJS - Linguagem de modelagem para criação de páginas HTML usando javascript
```sh
npm install ejs -save
```

* Nodemon - Utilitário que reinicia automaticamente o servidor NodeJS quando houver qualquer alteração no script
```sh
sudo npm install -g nodemon
```

* Iniciando servidor com nodemon
```sh
nodemon app
```

* Instalando módulo mysql
```sh
npm install mysql --save
```

* Instalando módulo Consign
```sh
npm install consign --save
```

* Instalando módulo Body Parser para tratar os dados recebido no body da requisição: request.body
```sh
npm install body-parser --save
```

* Instalando Express validator
```sh
npm install express-validator --save
```

* Instalando Socket IO
```sh
npm install socket.io --save
```

#### Próximo aula, 64. Preparando dependências e diretórios do app: 
* https://www.udemy.com/course/curso-completo-do-desenvolvedor-nodejs/learn/lecture/5754018#overview
