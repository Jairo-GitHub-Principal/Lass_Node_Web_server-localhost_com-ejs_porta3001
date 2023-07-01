var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use(express.static('../public')) // aqui fica a pasta public, e no less.ejs na importação do less, no href="aqui não indicaremos a pasta public, somente suas subpstar e arquivos"

app.get('/',function(req,res){
    res.render('../views/less');
})
app.listen(3001,"localhost",function(){
    console.log("execultando na porta 3001")
})
