import { useSelector, useDispatch } from "react-redux";
import { addNewPage, updatePage } from "../../redux/loterySlice";
import styles from './Edit.module.css';
import { useState } from "react";
import Mood from '../Mood/Mood';
import Emotions from '../Emotions/Emotions';
import { useParams, useNavigate } from "react-router-dom";
    



const Edit = () => {

    const allMoods = useSelector((state) => (
        state.diaryPages.chooseMood
    ))

    const allEmotions = useSelector((state) => 
        state.diaryPages.emotions
    )

    const pages = useSelector((state) => 
        state.diaryPages.diaryPages
    )
    console.log(pages);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const {id} = useParams();

    const selectedPage = pages?.find((item) => item.id==id);
    console.log(selectedPage);
    
    

    
    
    
    const [card, setCard] = useState({
        mood: selectedPage?.mood,
        notion: selectedPage?.notion, 
    })
    const [choosedEmotions, setChoosedEmotions] = useState(selectedPage?.emotions);
   
    

    // const handlerCard = (event) => {
    //     const {name} = event.target;
        
    //     setCard(prev => ({...prev, mood : name}));
        
    // }

   
    const handleCallback = (childData) => {
        if (childData.isChoosen===true ) {
           
          if (choosedEmotions?.indexOf(childData.nameOfEm)===-1) {
                   setChoosedEmotions([...choosedEmotions, childData.nameOfEm]);
           }
       } else {
           if (choosedEmotions?.indexOf(childData.nameOfEm)!==-1) {
               const filterArr = choosedEmotions.filter((item) => item!==childData.nameOfEm);
               setChoosedEmotions ([...filterArr]);
           }
       }
     
      return choosedEmotions;
   };

   const handlerNotion = (event) => {
        
        const {value} = event.target;
        setCard({...card, notion: value})
   }

   const handleCall = (event) => {
   
    const {value} = event.target;
    setCard({...card, mood : value});
};
   const handlerUpdate = (event) => {

       event.preventDefault();

        const updatedPage = {
            mood: card.mood,
            notion: card.notion, 
            emotions: choosedEmotions,
            date: selectedPage?.date,
            icon: selectedPage?.icon,
            id: id,
       
    }
    
    dispatch(updatePage(updatedPage));
    navigate("/")
    
   }
   



    return (
        <div className={styles.content}>
            <h3>What is your mood today?</h3>
            <ul className={styles.chooseMood}>{allMoods.map((item) => (
                <Mood icon={item.icon} mood={item.mood} id={item.id}  handlerClick={handleCall} key={item.id} choosedItem={card.mood}/>
            ))}
            </ul>
            <h3>Emotions</h3>
            <ul className={styles.chooseEmotions}>
                {allEmotions.map((item) => (
                   <Emotions elemOfEmotion={item.nameOfEm} id={item.id} parentCallback={handleCallback} arrOfEm={choosedEmotions} key={item.id}/>
                ))}
            </ul>
            <h3>Notion</h3>
            <input  className={styles.notion} type="text" placeholder="Start writing"  value={card.notion} onChange={handlerNotion}></input>
            <button onClick={handlerUpdate}>UPDATE</button>

        </div>
    )
}
export default Edit;