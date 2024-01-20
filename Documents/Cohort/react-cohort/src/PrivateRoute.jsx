import { Navigate, useNavigate } from "react-router-dom"


const PrivateRoute = ({children}) => {
    const token = true;
    if(token) {
        return (
            <div>{children}</div>
        )
    } else {
       return <Navigate to="/" />
    }
}

export default PrivateRoute