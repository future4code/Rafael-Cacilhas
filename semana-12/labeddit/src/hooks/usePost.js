import axios            from 'axios';
import {BASE_URL}       from '../constants/urls.js';
import {useState}       from 'react';
import {useEffect}      from 'react';





const usePost = () => {

    const [postagens,setPost] = useState()


    useEffect(  ()  =>  {


        const pag       = 1
        const posts     = 10
        const URL       =   `${BASE_URL}/posts?page=${pag}&size=${posts}`
    
        axios.get(URL   ,  {
                headers: {
                    'Content-Type':     'application/json',
                    'Authorization':    localStorage.getItem('token')
                } 
            }
        )
        .then(  (res)   => {
            setPost( res.data)
        })
        .catch( (erro) => {
            console.log(erro)
        })

    },[])

        return postagens

}

export default usePost


