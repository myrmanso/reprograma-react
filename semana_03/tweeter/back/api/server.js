const app = require('./config/app')
const http = require('http')

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Servidor subiu com sucesso!
    para derrubá-lo aperte Ctrl + C
    para visualizar acesse: http://localhost:${port}`)
})


// setInterval(() => {
//     http.get('http://twitelum-api.herokuapp.com/')
// }, 240000)
