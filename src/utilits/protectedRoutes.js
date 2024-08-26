import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState} from 'react';
import { setIsNotAdmin } from "../redux/loterySlice";
import { useSelector, useDispatch} from 'react-redux';


const ProtectedRoutes = () => {

    const isNotAdmin = useSelector((state) => 
        state.diaryPages.isNotAdmin
    )
    const isLogged = useSelector((state) => ( state.diaryPages.isLoggedIn));
   
    
    return (
       isNotAdmin? <Navigate to={"/login"}/> : <Outlet/>  
    )
}
export default ProtectedRoutes;