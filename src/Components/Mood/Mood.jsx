import styles from './Mood.module.css';

const Mood = ({ icon, mood, id, choosedItem, handlerClick }) => {
 


    
  return(  
       
        <li key={id}  className={choosedItem===mood? styles.activeStyle :styles.chooseMood__item} >
          <img  className={ styles.img }  src={icon}></img>
          <label htmlFor={id} className={styles.label}>{mood}</label> 
          <input type="checkbox"  className={styles.chooseEmotions__item} onClick={ handlerClick}  value={mood} id={id}></input>
        </li>
  )
}

export default Mood;