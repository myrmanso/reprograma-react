const errors = require('restify-errors');

module.exports = (app) => {
    const authLogin = app.middlewares.authLogin
    app.post('/login', (req, res, next) => {
            const usuarioDAO = app.infra.dao.UsuariosDAO
            const jsonBody = typeof req.body === 'object' ? req.body : JSON.parse(req.body)
            const login = jsonBody.login
            const senha = jsonBody.senha

            if(jsonBody.login && jsonBody.senha) {
                return usuarioDAO
                    .buscarPorLoginESenha({
                        login,
                        senha
                    })
                    .then((usuario) => {
                        if(!usuario) {
                            return next( new errors.NotFoundError('Usuario não encontrado') )
                        }
                        const token = authLogin.geraToken(login, senha)
                        res.status(200)
                        res.json({ token: token })    
                    })
            } 

            if(!jsonBody.login && !jsonBody.senha) {
                return next( new errors.InvalidContentError('É necessário informar um login e uma senha para efetuar login no sistema') )    
            } else {
                if(!jsonBody.login) {
                    return next( new errors.InvalidContentError('É necessário informar um login para efetuar login no sistema') )
                }
                if(!jsonBody.senha) {
                    return next( new errors.InvalidContentError('É necessário informar uma senha para efetuar login no sistema') )
                }
            }
            
        }
    )

}