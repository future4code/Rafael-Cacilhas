import axios            from 'axios';
import {BASE_URL}       from '../constants/urls.js';
import {useState}       from 'react';
import {useEffect}       from 'react';




const useComent = (props) => {

    const [comentarios,setComent] = useState()


    useEffect(  ()  =>  {

        const id       =    props
        const URL      =    `${BASE_URL}/posts/${id}/comments`
    
        axios.get(URL   ,  {
            headers: {
                'Authorization':    localStorage.getItem('token')
            } 
        }
    )
    .then(  (res)   => {
        setComent( res.data)
    })
    .catch( (erro) => {
        console.log(erro.response)
    })

    },[props])

        return comentarios

}

export default useComent

