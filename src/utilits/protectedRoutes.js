import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState} from 'react';


const ProtectedRoutes = () => {

    const [isNotAdmin, setIsNotAdmin] = useState(false);

    useEffect (() => {
        const user = localStorage.getItem('user');
        const emailOfUser= localStorage.getItem('mail');
        
    if (user!=="admin" && emailOfUser !== "admin@mail.com") {
         setIsNotAdmin(true);
    }
    }, [])
   

    
    return (
       isNotAdmin? <Navigate to={"/login"}/> : <Outlet/>  
    )
}
export default ProtectedRoutes;