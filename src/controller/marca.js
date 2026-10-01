import service from '../service/marca.js'
class Controller {
    Criar(req, res) {
        try {
            req.body.nome
            req.body.email
            req.body.idade

            service.Criar(nome, email, idade)
            
            res.send({ message: "saiuehsaioehsai" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
}
export default new Controller()