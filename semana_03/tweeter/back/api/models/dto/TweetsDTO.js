const errors = require('restify-errors')

class TweetsDTO {
    constructor(app) {
        this.app = app
        this.toTweet = this.toTweet.bind(this)
    }

    toTweet(jsonBody) {
        if(!jsonBody.login) {
            throw new errors.InvalidContentError('Login não informado')
        }
        if(!jsonBody.conteudo) {
            throw new errors.InvalidContentError('Conteúdo não informado')
        }

        return {
            usuario: {
                login: jsonBody.login
            },
            conteudo: jsonBody.conteudo,
            dataCriacao: jsonBody.data || new Date(),
            likes: [],
            totalLikes: 0
        }
    }
}

module.exports = (app) => new TweetsDTO(app)