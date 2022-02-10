const express = require("express");

const app = express();

      //CONEXAO COM O BANCO

const mysql = require('mysql');

var connection = mysql.createConnection({
     
   host:'localhost',
   user:'rafael',
   password: '123456',
   database: 'node'

 });

 connection.connect(function(err) {
   if (err) {
      console.error('Erro de Conexao' + err.stack);
      return;
   }
   console.log('A conexao é: ' + connection.threadId);
 });

     connection.query('SELECT * FROM users', function(err, rows, fields){
                if(!err){
                   console.log("Resultado:", rows)
                }else{
                   console.log('Erro ao Realizar a consulta');
                }
          
     });



   // CRIANDO SERVIDOR

app.get("/", function(req, res){

   res.sendFile(__dirname + "/src/index.html");

});
  
  app.listen(8080);