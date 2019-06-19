import React from 'react'


const CaixaTexto = (props) =>{
    //destructuring
    const {className, type, placeholder, id, value, name, required, onChange} = props

    let valida = (e) => {

        const valor = e.target.value
        const nome = e.target.name

        if(required && valor.trim() === ""){
            onChange(nome, valor, "Campo obrigatório")
            return valor
        }

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (type === 'email' && !regex.test(valor)) {
            onChange(nome, valor, "Digite um email válido")
            return valor 
        }

        const regexCpf = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/
        if(name === 'numeroDoCpf' && !regexCpf.test(valor)) {
            onChange(nome, valor, "Digite um CPF válido")
            return valor
        }

        const regexData = /((\d{2})|(\d))\/((\d{2})|(\d))\/((\d{4})|(\d{2}))/ 
        if(name === 'dataDeNascimento' && !regexData.test(valor)) {
            onChange(nome, valor, "Digite uma data válida")
            return valor
        }

        const regexCep = /[0-9]{5}-[0-9]{3}/
        if(name === 'cep' && !regexCep.test(valor)) {
            onChange(nome, valor, "Digite um CEP válido")
            return valor
        }

        const regexCnpj = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/
        if(name === 'cnpj' && !regexCnpj.test(valor)) {
            onChange(nome, valor, "Digite um CNPJ válido")
            return valor
        }

        const regexSenhaMinuscula = /[a-z]/g
        const regexSenhaMaiuscula = /[A-Z]/g
        const regexSenhaNumero = /[0-9]/g
        let msgErroSenha = 'Digite uma senha com '
        if(name === 'senha') {
            if(!valor.match(regexSenhaMinuscula)) {
                msgErroSenha += 'pelo menos uma letra minuscula '
            } else if(!valor.match(regexSenhaMaiuscula)) {
                msgErroSenha += 'pelo menos uma letra maiuscula '
            } else if(!valor.match(regexSenhaNumero)) {
                msgErroSenha += 'pelo menos um número '
            } else if(valor.length < 8) {
                msgErroSenha += 'pelo menos 8 caracteres '
            } else {
                msgErroSenha = ''
            }
            onChange(nome, valor, msgErroSenha)
            return valor
        }
        onChange(nome, valor)

    }

    return(
        <input 
            className={className}
            type={type} 
            id={id} 
            placeholder={placeholder} 
            value={value} 
            name={name}
            onChange={valida} 
        />
    )
}

export default CaixaTexto