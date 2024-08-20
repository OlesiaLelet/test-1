import { useSelector, useDispatch } from "react-redux";
import { addNewPage } from "../../redux/loterySlice";
import styles from './Diary.module.css'
import { useState } from "react";
import Mood from '../Mood/Mood';
import Emotions from '../Emotions/Emotions';
import { useNavigate } from "react-router-dom";

const Diary = () => {
    
    const dispatch = useDispatch();
    const today = new Date();
    const navigate = useNavigate();


    const [card, setCard] = useState({
        mood: "",
        notion: "", 
    })
    const [choosedEmotions, setChoosedEmotions] = useState([]);


    
    const mood = useSelector((state) => (
        state.diaryPages.chooseMood
    ))
    const emotions = useSelector((state) => 
        state.diaryPages.emotions
    )
    const diaryPages = useSelector((state) => 
        state.diaryPages.diaryPages
    )

    

    const handlerClick = (event) => {
        const {value} = event.target;
         setCard({...card, mood : value});
    
        
        
    }


const handleCallback = (childData) => {
     if (childData.isChoosen===true ) {
        
       if (choosedEmotions.indexOf(childData.nameOfEm)===-1) {
                setChoosedEmotions([...choosedEmotions, childData.nameOfEm]);
        }
    } else {
        if (choosedEmotions.indexOf(childData.nameOfEm)!==-1) {
            const filterArr = choosedEmotions.filter((item) => item!==childData.nameOfEm);
            setChoosedEmotions ([...filterArr]);
        }
    }
  
   return choosedEmotions;
};

const handleCall = (childData) => {
    if (childData.isChoosen===true ) {
        setCard({...card, mood : childData.nameOfChoosen})
   }
}



const handlerNotion = (event) => {

    const {value} = event.target;
    setCard({...card, notion: value})

}
const findIcon = (moods, certainM) => {
    const findedElm = moods.find((item) => item.mood === certainM )
    return findedElm.icon

}
 const handlerSavePage = () => {

    const  newPageOfDiary = {
        mood: card.mood,
        notion: card.notion, 
        emotions: choosedEmotions,
        date: `${today.getDate()} ${today.toLocaleString("uk-UA", { month: "short" })}`,
        icon: card.mood!=='' ? findIcon(mood, card.mood) : null,
        id: diaryPages.length +1,
   }
   
    dispatch(addNewPage(newPageOfDiary));
    navigate("/")
    

}


    



    return (
        <div className={styles.content}>
            <h3>What is your mood today?</h3>
            <ul className={styles.chooseMood}>{mood.map((item) => (
                <Mood icon={item.icon} mood={item.mood} id={item.id} nameOfChoosen={card.mood} handlerClick={handlerClick} choosedItem={card.mood}/>
            ))}</ul>
            <h3>Emotions</h3>
            <ul className={styles.chooseEmotions}>
                {emotions.map((item) => (
                   <Emotions elemOfEmotion={item.nameOfEm} id={item.id} parentCallback={handleCallback} arrOfEm={choosedEmotions}/>
                ))}
            </ul>
            <h3>Notion</h3>
            <input  className={styles.notion} type="text" placeholder="Start writing" onChange={handlerNotion} value={card.notion}></input>
            <button onClick={handlerSavePage}>Save</button>

        </div>
    )
}

export default Diary;