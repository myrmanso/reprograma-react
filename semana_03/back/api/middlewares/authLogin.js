const jwt = require('jsonwebtoken')
const moment = require('moment')
const errors = require('restify-errors')

function geraToken(login, senha, olderToken) {
    const loginToken = {
        login,
        senha
    }
    const token = jwt.sign(
        loginToken,
        process.env.JWTSECRET,
        { expiresIn: moment().add(14, 'days').valueOf() }
    );
    return token
}

function decodificaToken(token) {
    var tokenDecodificado = jwt.verify(token, process.env.JWTSECRET);
    return tokenDecodificado
}

module.exports = function(app) {
    const usuariosDAO = app.infra.dao.UsuariosDAO
    return {
        geraToken,
        decodificaToken,
        middleware: function authLoginMiddleware(req,res, next) {
            // console.log(req.body)
            const AUTHTOKEN = req.query['X-AUTH-TOKEN'] || req.query['x-auth-token']
                        
            // if(req.body === undefined) {
            //     return next(new errors.UnauthorizedError('Nenhum dado foi enviado'))
            // }

            // console.log('AUTHTOKEN', req.query)

            if(req.body) {
                req.body = typeof req.body === 'object' ? req.body : JSON.parse(req.body)
            } else {
                req.body = {}
            }


            // Se for a rota de /tweets
            if(req.url === '/tweets' && req.method === 'GET') {
                console.log('Bateu em tweets')
                req.login = ''
                return next()
            }

            if(AUTHTOKEN || req.body.login) {
                // Se tiver o body.login vai por outro
                if(req.body.login) {
                    req.login = req.body.login
                    return next()
                }
                // Se tiver o x-auth-token vai por um caminho
                if(AUTHTOKEN) {
                    

                    try {
                        const tokenDecodificado = decodificaToken(AUTHTOKEN)
                        const isExpired = moment(tokenDecodificado.exp).isBefore(new Date())
                        if(isExpired) {
                            return next(new errors.UnauthorizedError('Token expirado'))
                        }
                        
                        return usuariosDAO.buscarPorLoginESenha(tokenDecodificado)
                                            .then((usuario) => {
                                                if(!usuario)
                                                    throw new errors.NotFoundError('Usuário não encontrado')
                                                req.login = tokenDecodificado.login
                                                return next()
                                            })
                                            .catch(err => next(err))
                    } catch(err) {
                        return next(new errors.UnauthorizedError('Token inválido'))
                    }                
                } else {
                    return next(new errors.UnauthorizedError('Token não enviado'))
                }
            } else {
                // Se não tiver nenhum dos dois bloqueia
                return next(new errors.UnauthorizedError('Nenhuma forma de autenticação foi enviada'))
            }

        }
    }
}