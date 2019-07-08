import axios from 'axios'

const configuracoes = {
    baseURL : 'http://localhost:3001'
}

const protocolo = axios.create(configuracoes)
export default protocolo