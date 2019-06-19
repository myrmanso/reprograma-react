import axios from 'axios'

const config = {
    baseURL : 'https://my-json-server.typicode.com/reprograma/T7-react-II',
    timeout: 1000,

}

const protocolo = axios.create(config)

export const getComentarios = () => {
    const url = '/comentarios'

    return protocolo.get(url)
}
