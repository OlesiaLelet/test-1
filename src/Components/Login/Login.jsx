import { useState } from 'react';
import styles from './Login.module.css';
import Logout from '../Logout/Logout';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setLoggedIn} from '../../redux/loterySlice';



const Login = ( ) => {

    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
    });

    const [isLog, setIsLog] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  

    const handlerInputs = (event) => {
       const {value, name} = event.target;
       
       setInputValues({...inputValues, [name]: value});
    }

    const handlerSubmit = (e ) => {
       
        e.preventDefault();

        if(inputValues.name!=="" && inputValues.email!=="" )
        {
            localStorage.setItem("user", inputValues.name);
            localStorage.setItem("email", inputValues.email);
            localStorage.setItem("isLog", true);
             setIsLog(true);
            
            
        }
        setInputValues({
            name: "",
            email: "",
        })
     navigate('/logOut')
     dispatch(setLoggedIn());
        

    }

 



    return (
        <div className={styles.container}>
       {/* {isLog? <Navigate to="/logOut"/>: */}
       <form className={styles.form}>
            <h1 className={styles.form__title}>LOGIN FORM</h1>
            <input type='text' plaseholder="Name" value={inputValues.name} name='name' onChange={handlerInputs} className={styles.form__input}></input>
            <input type='text' plaseholder="Email" value={inputValues.email} name='email' onChange={handlerInputs} className={styles.form__input}></input>
            <button type='submit' onClick={handlerSubmit} className={styles.form__button}>LOGIN</button>
        </form>
       
    {/* //    } */}

        
        </div>
    )
}

export default Login;