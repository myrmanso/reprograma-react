class UsuariosController {
    constructor(app) {
        this.app = app
        this.UsuariosDAO = this.app.infra.dao.UsuariosDAO
        this.TweetsDAO = this.app.infra.dao.TweetsDAO
        // this.UsuariosDTO = app.models.dto.UsuariosDTO
        
        // Class Methods
        this.listar = this.listar.bind(this)
        this.listarUm = this.listarUm.bind(this)
        this.adicionar = this.adicionar.bind(this)
        this.deletar = this.deletar.bind(this)
        this.listarTweetsDeUmUsuario = this.listarTweetsDeUmUsuario.bind(this)
    }

    listar(req, res) {
        this.UsuariosDAO
            .buscaTodos()
            .then((data) => {
                res.json(data)
            })
    }

    
    listarUm(req,res) {
        const loginUsuario = req.params.login
        this.UsuariosDAO
            .buscaUm(loginUsuario)
            .then((data) => {
                res.json(data)
            })
    }

    adicionar(req, res) {
        res.send({ status: `Não implementado: ${req.params.id}` })
    }
    
    deletar() {
        res.send({ status: `Não implementado: ${req.params.id}` })
    }

    listarTweetsDeUmUsuario(req, res) {
        const loginUsuario = req.params.login
        this.TweetsDAO
            .buscaTodosDeUmUsuario(loginUsuario)
            .then((data) => {
                res.json(data)
            })
    }
}


module.exports = (app) => new UsuariosController(app)