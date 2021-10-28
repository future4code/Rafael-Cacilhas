import axios            from 'axios';

import {BASE_URL}       from '../constants/urls.js';
import {gotoFeed}       from '../router/coordinator.js';



export const login = (body,clear,history) => {
    
    axios.post(`${BASE_URL}/users/login`,body)
    .then(  (res)   => {
        localStorage.setItem('token', res.data.token)
        clear()
        gotoFeed(history)
    })
    .catch( (erro) => {
        console.log(erro)
    })

}


export const cadastro = (body,clear,history) => {
    const header    = "Content-Type: application/json"
    
    axios.post(`${BASE_URL}/users/signup`,body,header)
    .then(  (res)   => {
        localStorage.setItem('token', res.data.token)
        clear()
        gotoFeed(history)
    })
    .catch( (erro) => {
        alert(erro.response)
    })

}