module.exports = (app) => {
    app.get('/', (req, res) => {
        res.json({
            msg: 'Seja bem vindo ao Twitelum API, aqui você pode ver quais são as rotas que você pode fazer operações para dar vida à sua aplicação.',
            rotas: [
                {
                    url: '/login'
                },
                {
                    url: '/tweets'
                },
                {
                    url: '/usuarios'
                },
                {
                    url: '/hashtags'
                }
            ]
        })
    })
}