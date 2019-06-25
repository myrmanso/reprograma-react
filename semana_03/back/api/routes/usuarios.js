module.exports = (app) => {
    const usuariosController = app.controllers.UsuariosController

    app.get('/usuarios', usuariosController.listar)
    app.get('/usuarios/:login', usuariosController.listarUm)
    app.get('/usuarios/:login/tweets', usuariosController.listarTweetsDeUmUsuario)
    app.get('/usuarios/adicionar', usuariosController.adicionar) // Fazer adicionar usuario via URL
    // app.post('/usuarios/', usuariosController.adicionar)
    // app.del('/usuarios/:login', usuariosController.deletar)
    
}