const errors = require('restify-errors');
const UsuariosDAO = require('./UsuariosDAO')

class TweetsDAO {
    constructor(app) {
        this.dbTweets = app.infra.config.db.tweets
        this.usuariosDAO = UsuariosDAO(app)

        this.buscaUm = this.buscaUm.bind(this)
    }

    buscaTodos() {
        return new Promise((resolve, reject) => {
            this.dbTweets.find({}).sort({createdAt: -1}).exec((err, data) => {
                if(err) {
                    reject(new errors.InternalServerError(err))
                }
                resolve(data)
            })
        })
    }

    buscaUm(idTweet, loginUsuario) {
        return new Promise((resolve, reject) => {
            let query;
            if(loginUsuario) {
                query = { _id: idTweet, "usuario.login": loginUsuario }    
            }
            query = { _id: idTweet }
            this.dbTweets.findOne(query, (err, data) => {
                if(err) {
                    reject(new errors.InternalServerError(err))
                }
                resolve(data)
            })
        })
    }

    buscaTodosDeUmUsuario(loginUsuario) {
        return new Promise((resolve, reject) => {
            const query = { "usuario.login": loginUsuario }
            
            this.dbTweets.find(query, (err, data) => {
                if(err) {
                    reject(new errors.InternalServerError(err))
                }
                resolve(data)
            })
        })
    }

    remover(tweetId, loginUsuario) {
        return new Promise((resolve,reject) => {
            const query = { "_id": tweetId, "usuario.login": loginUsuario }
            this.dbTweets.remove(query, {}, (err,data) => {
                if(err) {
                    reject(new errors.InternalServerError(err))
                }
                if(data === 0) {
                    reject(new errors.NotFoundError(`Tweet com id: ${tweetId} não foi encontrado e não pode ser removido`))
                }
                resolve(data)
            })
        })
    }
    
    adicionar(tweet) {
        return this.usuariosDAO 
                    .buscaUm(tweet.usuario.login)
                    .then( usuario => {
                        if(!usuario)
                            throw new errors.NotFoundError('Usuário não encontrado')
                        
                        delete usuario.senha
                        delete usuario.createdAt
                        delete usuario.updatedAt
                        delete usuario._id

                        tweet.usuario = {
                            ...usuario
                        }
                        return tweet
                    })
                    .then((tweetModificado) => {
                        return new Promise((resolve, reject) => {
                            this.dbTweets.insert(tweetModificado, (err, data) => {
                                if(err) {
                                    reject(new errors.InternalServerError(err))
                                }
                                resolve(data)
                            })
                        })
                    })
    }
    
    buscaTodasHashtags() {
        return new Promise((resolve, reject) => {
            this.dbTweets.find({"conteudo": /#/}).sort({createdAt: -1}).exec((err, data) => {
                if(err) {
                    reject(new errors.InternalServerError(err))
                }
                resolve(data)
            })
        })
    }

    buscaUmaHashtag(nomeHashtag) {
        return new Promise((resolve, reject) => {
            this.dbTweets.find({"conteudo": new RegExp(`#${nomeHashtag}[ -]{1}`)}).sort({createdAt: -1}).exec((err, data) => {
                if(err) {
                    reject(new errors.InternalServerError(err))
                }
                resolve(data)
            })
        })
    }

    toggleLike(tweetInfo) { // Colocar uma camada antes
        return this.buscaUm(tweetInfo.id)
                    .then((tweet) => {
                        if(!tweet) {
                            throw new errors.NotFoundError('Tweet não encontrado')
                        }
                        const liker = tweetInfo.tweet.usuario.login
                        const isLiked = tweet.likes.find((like) => like.usuario.login === liker )
                        if(isLiked) {
                            const updatedLikes = tweet.likes.filter((like) => like.usuario.login !== liker )
                            return this.removeLike(tweetInfo, updatedLikes)
                        } else {
                            return this.insereLike(tweetInfo)
                        }
                    })
    }
                
    insereLike(tweetInfo) {
        return new Promise((resolve, reject) => {
            this.dbTweets.update({ "_id": tweetInfo.id }, { $push: { likes: tweetInfo.tweet }, $inc: { totalLikes: 1 } }, {}, (err, data) => {
                if(data === 0) {
                    reject(new errors.NotFoundError('Não foi possível inserir o like'))
                }
                resolve({
                    message: 'Like inserido com sucesso!',
                    status: 201
                })
            })            
        })
    }
    removeLike(tweetInfo, updatedLikes) {
        return new Promise((resolve, reject) => {
            this.dbTweets.update({ "_id": tweetInfo.id }, { $set: { likes: updatedLikes, totalLikes: updatedLikes.length } }, {}, (err, data) => {
                if(data === 0) {
                    reject(new errors.NotFoundError('Não foi possível remover o like'))
                }
                resolve({
                    message: 'Like removido com sucesso!',
                    status: 'removido'
                })
            })            
        })            
    }
}

module.exports = (app) => new TweetsDAO(app)