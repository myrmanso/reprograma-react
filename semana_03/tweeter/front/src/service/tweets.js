import protocolo from './api'

export const postTweets = (tweet, token) => {
    const url = `/tweets?X-AUTH-TOKEN=${token}`
    return protocolo.post(url, tweet)
}

//urlDaApi.metodoDeEnvioDeDados(ondeVcQuerBater, OQueVocêVaiAcrescentarNoBody)

