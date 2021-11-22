import {useHistory}         from 'react-router-dom';
import {useLayoutEffect}    from 'react';
import {gotoFeed}           from '../router/coordinator';

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(  ()  =>  {
        const token = localStorage.getItem('token')
        if(token){
            gotoFeed(history)
        }
    },[history])
}

export default useUnprotectedPage