import { useState } from 'react';
import styles from './Logout.module.css';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setLoggedOut} from '../../redux/loterySlice';

const Logout = () => {

    const [isLogOut, setIsLogOut] = useState(false);
    const dispatch = useDispatch();

    const handlerLogOut = () => {
        setIsLogOut(true);
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("isLog");
        dispatch(setLoggedOut());
    }

    return (
        <>
        {isLogOut? <Navigate to={'/login'}/> :
        <div className={styles.loggedIn}>
              <h3 className={styles.welcome}>Welcome to app</h3>  
              <button onClick={handlerLogOut} className={styles.logOut}>Log Out</button>
        </div>}
    </>
    )
}

export default Logout;