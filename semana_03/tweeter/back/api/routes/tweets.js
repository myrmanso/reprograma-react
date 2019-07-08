// const authLogin = require('../middlewares/authLogin')

module.exports = (app) => {
    const tweetsController = app.controllers.TweetsController
    const authLogin = app.middlewares.authLogin

    app.get('/tweets', authLogin.middleware, tweetsController.listar)
    app.get('/tweets/:id', authLogin.middleware, tweetsController.listarUm)
    app.post('/tweets/', authLogin.middleware, tweetsController.adicionar)
    app.del('/tweets/:id', authLogin.middleware, tweetsController.deletar) // implementar o deletar
    app.post('/tweets/:id/like', authLogin.middleware, tweetsController.like) // ver o que retornar
}