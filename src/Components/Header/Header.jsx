import { NavLink } from "react-router-dom";
import {paths} from "../../App.js";
import styles from './Header.module.css';

const Header = ({isLoggedIn}) => {

  
    return (
        <nav className={styles.navList}>
            {isLoggedIn?
            <>
            <NavLink to={paths.logOut}>Log out</NavLink>
            <NavLink to={paths.main}>Main</NavLink>
            <NavLink to={paths.diary}>Diary</NavLink>
            </>
            :
            <NavLink to={paths.login}>Login</NavLink>


            }
            
            
        </nav>
    )
}
export default Header;