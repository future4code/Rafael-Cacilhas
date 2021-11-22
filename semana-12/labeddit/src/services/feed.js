import axios            from 'axios';

import {BASE_URL}       from '../constants/urls.js';

export const curtir = (id,check) => {   //Check verifica se é um post (true) ou comentário (false)

    if(check !==false ) {

        const URL = `${BASE_URL}/posts/${id}/votes`

        axios.post(URL, {direction: 1}, {
            headers: {
                    'Content-Type':     'application/json',
                    'Authorization':    localStorage.getItem('token'),
                }
            })
            .then(  (res)   => {
                console.log(res.data)
            })
            .catch( (erro) => { 
                console.log(erro.response)
            })
    }

    if(check ===false ) {

        const URL = `${BASE_URL}/comments/${id}/votes`

        axios.post(URL, {direction: 1}, {
            headers: {
                    'Content-Type':     'application/json',
                    'Authorization':    localStorage.getItem('token'),
                }
            })
            .then(  (res)   => {
                console.log(res.data)
            })
            .catch( (erro) => { 
                console.log(erro.response)
            })
    }

}


export const descurtir = (id,check) => {


    if(check !==false ) {

        const URL = `${BASE_URL}/posts/${id}/votes`

        axios.post(URL, {direction: -1}, {
            headers: {
                    'Content-Type':     'application/json',
                    'Authorization':    localStorage.getItem('token'),
                }
            })
            .then(  (res)   => {
                console.log(res.data)
            })
            .catch( (erro) => { 
                console.log(erro.response)
            })
    }

    if(check ===false ) {

        const URL = `${BASE_URL}/comments/${id}/votes`

        axios.post(URL, {direction: -1}, {
            headers: {
                    'Content-Type':     'application/json',
                    'Authorization':    localStorage.getItem('token'),
                }
            })
            .then(  (res)   => {
                console.log(res.data)
            })
            .catch( (erro) => { 
                console.log(erro.response)
            })
    }
}


export const enviaPost = (body) => {

    const URL = `${BASE_URL}/posts/`

    axios.post(URL,body,{
        headers: {
            'Content-Type':     'application/json',
            'Authorization':    localStorage.getItem('token')
        }} )
        .then(  (res)   => {
            console.log(res.data)
        })
        .catch( (erro) => {
            alert(erro.response)
        })
}

export const enviaComent = (body,id) => {

    const URL = `${BASE_URL}/posts/${id}/comments`
    axios.post(URL,body,{
        headers: {
            'Content-Type':     'application/json',
            'Authorization':    localStorage.getItem('token')
        }} )
        .then(  (res)   => {
            console.log(res.data)
        })
        .catch( (erro) => {
            alert(erro.response)
        })
}

        