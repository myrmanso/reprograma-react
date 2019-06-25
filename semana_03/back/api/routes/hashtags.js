module.exports = (app) => {
    const hashtagsController = app.controllers.HashtagsController

    app.get('/hashtags', hashtagsController.listar)

    app.get('/hashtags/:hashtag', hashtagsController.listarUma)
}