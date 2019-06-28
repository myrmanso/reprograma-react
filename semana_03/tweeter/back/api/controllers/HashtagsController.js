class HashtagsController {
    constructor(app) {
        this.app = app
        this.tweetsDAO = this.app.infra.dao.TweetsDAO
        
        // Class Methods
        this.listar = this.listar.bind(this)
        this.listarUma = this.listarUma.bind(this)
    }

    listar(req, res) {
        this.tweetsDAO
            .buscaTodasHashtags()
            .then((data) => {
                res.json(data)
            })
    }

    listarUma(req,res) {
        const hashtag = req.params.hashtag

        this.tweetsDAO
            .buscaUmaHashtag(hashtag)
            .then((data) => {
                res.json(data)
            })
    }
}

module.exports = (app) => new HashtagsController(app)