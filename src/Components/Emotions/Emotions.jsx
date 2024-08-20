import styles from './Emotions.module.css'
import { useState } from 'react';

const Emotions = ({elemOfEmotion, id, parentCallback, arrOfEm, key }) => {

    const [isChecked, setIsChecked] = useState(false);
    
    

const handlerClick = (e) => {

    const {value,checked} = e.target;
    setIsChecked(checked);
    
    parentCallback({
        nameOfEm:value,
        isChoosen: checked});
}
const existInArr = arrOfEm?.indexOf(elemOfEmotion)





     
    return (
        <li key={key}  className={existInArr>-1||isChecked? styles.activeStyle :styles.chooseEmotions__item} name="emotion">
          <label htmlFor={elemOfEmotion} className={styles.label}>{elemOfEmotion}</label> 
          <input type="checkbox"  className={styles.chooseEmotions__item} onClick={ handlerClick}  value={elemOfEmotion} id={elemOfEmotion}></input>
        </li>
    )
}

export default Emotions;