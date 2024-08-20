import styles from './Main.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Edit from '../Edit/Edit';
import editIcon  from '../../icons/edit.png'


   

const Main = () => {
    
    const notions = useSelector(state => state.diaryPages.diaryPages);
    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(false);

    const handlerEdit = () => {
        setIsEdit(!isEdit);
    }
    const date = new Date();
    const showTime = date.getHours() + ':' + date.getMinutes() 
     
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>There will be your notions</h2>
            <ul className={styles.ulList}>
               { notions?.map ((item) => (
                    <li className={styles.ulList__li} key={item.id}>
                        <div className={styles.li_date}>{item.date}</div>
                        <div className={styles.li__notion}>
                        <div>
                           <div className={styles.time}>{showTime}</div>
                           <div className={styles.mood} >
                            
                           {item.icon? <img src={item.icon} className={styles.mood__icon}/>:''}
                           <div>{item.mood}</div>
                          </div>
                          
                          <div>{item.notion}</div>
                        
                        </div>
                        <Link to={`/edit/${item.id}`}><img className={styles.icon} src={editIcon} onClick={handlerEdit}/></Link>
                      
                        </div>
                        {isEdit? 
                        <Edit icon={item.icon} moodOfE ={item.mood} id = {item.id}  notion={item.notion} nameOfEm={item.emotions}/>
                    : ""}

                    </li> 
            ))}
            </ul> 
        
           
        </div>
    )
}
export default Main;