const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cilas:7VlWit5U6OdsW9rx@cluster0-0bgbq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  });
mongoose.set('useCreateIndex', true);
//mongoose.connect('mongodb://localhost/noderest');

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('connected', function () {
    console.log("Banco de Dados conectado");
});

db.on('disconnected', function () {
    console.log("Banco de Dados desconectado");
});

db.on('err', function (err) {
    console.log("Erro na conexão do Banco de Dados: " + err);
});

module.exports = mongoose;
