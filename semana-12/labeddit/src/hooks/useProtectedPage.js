import {useHistory}         from 'react-router-dom';
import {useLayoutEffect}    from 'react';
import {gotoLogin}          from '../router/coordinator';

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(  ()  =>  {
        const token = localStorage.getItem('token')
        if(!token){
            gotoLogin(history)
        }
    },[history])
}

export default useProtectedPage