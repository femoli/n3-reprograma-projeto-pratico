const app = require('./src/app');
const port = 3010;

app.listen (port, function() {
console.log(`app está rodando na porta ${port}`)
})