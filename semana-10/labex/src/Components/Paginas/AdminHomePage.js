
import {useHistory} from "react-router-dom";


export default function AdminHomePage() {

    const history = useHistory()

    const gotoHome = () => {
        history.push("/")
    }
    const gotoAdmin = () => {
        history.push("/admin")
    }


    return (
        <div>

        
            <h1>Admin</h1>

            
        </div>
    )
}