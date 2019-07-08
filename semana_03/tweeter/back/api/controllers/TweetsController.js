const errors = require('restify-errors');

class TweetsController {
    constructor(app) {
        this.app = app
        this.tweetsDAO = this.app.infra.dao.TweetsDAO
        this.tweetsDTO = app.models.dto.TweetsDTO
        
        // Class Methods
        this.listar = this.listar.bind(this)
        this.listarUm = this.listarUm.bind(this)
        this.adicionar = this.adicionar.bind(this)
        this.deletar = this.deletar.bind(this)
        this.like = this.like.bind(this)
    }

    listar(req, res) {
        console.log(req.login)
        this.tweetsDAO
            .buscaTodos()
            .then(tweets => {
                if(req.login) {
                    return tweets.map((tweet) => {
                        console.log(tweet.usuario.login, req.login)
                        console.log(tweet.usuario.login === req.login)
                        if(tweet.usuario.login === req.login) {
                            tweet.removivel = true
                        }
                        const likeado = tweet.likes.find((like) => {
                            return like.usuario.login === req.login
                        })

                        return {
                            ...tweet,
                            likeado: !!likeado
                        }
                    })
                } else {
                    return tweets
                }

            })
            .then((tweets) => {
                res.json(tweets)
            })
    }

    listarUm(req,res) {
        const idTweet = req.params.id
        this.tweetsDAO
            .buscaUm(idTweet)
            .then((data) => {
                res.json(data)
            })
    }

    adicionar(req,res, next) {
        // Pega o header e verifica se tem o token pra poder publicar
        const body = req.body
        const jsonBody = typeof req.body === 'object' ? req.body : JSON.parse(body)
        console.log(req.login)
        const tweetObj = {
            login: req.login,
            conteudo: jsonBody.conteudo
        }
        try {
            this.tweetsDAO
                .adicionar(this.tweetsDTO.toTweet(tweetObj))
                .then((tweet) => {
                    if(tweet.usuario.login === req.login) {
                        tweet.removivel = true
                    }
                    // Header location: /tweets/id
                    req.header('location', `/tweets/${tweet._id}`);
                    res.status(201) 
                    res.json(tweet)
                })
                .catch( (err) => res.json(err) )
        } catch(e) {
            next( new errors.InvalidContentError(e.message) )
        }
    }

    deletar(req,res, next) {
        const tweetId = req.params.id
        this.tweetsDAO
            .remover(tweetId, req.login)
            .then((itensRemovidos) => {
                res.status(201) 
                res.json({
                    removidos: itensRemovidos,
                    message: `Tweet com id: ${tweetId} foi removido com sucesso`
                })
            })
            .catch((err) => {
                next(err)
            })
    }

    like(req,res, next) {
        const tweetInfo = {
            id: req.params.id,
            tweet: {
                usuario: {
                    login: req.login
                }
            }
        }

        this.tweetsDAO
            .toggleLike(tweetInfo)
            .then((response) => {
                res.status(201)
                res.json({
                    liker: req.login,
                    ...response
                })
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = (app) => new TweetsController(app)