import { NavLink } from "react-router-dom";
import {paths} from "../../App.js";
import styles from './Header.module.css';
import { useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";


const Header = ({isLoggedIn}) => {
    
    const isNotAdmin = useSelector((state) => 
        state.diaryPages.isNotAdmin
    )
   
    
    const navigate = useNavigate();
  
    return (
        <nav className={styles.navList}>
            {isLoggedIn && !isNotAdmin?
            <>
            <NavLink to={paths.logOut}>Log out</NavLink>
            <NavLink to={paths.main}>Main</NavLink>
            <NavLink to={paths.diary}>Diary</NavLink>
            </>
            : isLoggedIn && isNotAdmin ?  <NavLink to={paths.logOut}>Log out</NavLink> : 
             <NavLink to={paths.login}>Login</NavLink> 
}

            
            
        </nav>
    )
}
export default Header;