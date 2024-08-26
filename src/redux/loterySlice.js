import { createSlice} from "@reduxjs/toolkit";
import great from '../icons/great.png';
import norm from '../icons/norm.png';
import canBe from '../icons/canBe.png';
import notGood from '../icons/notGood.png';
import awful from '../icons/awful.png'

const initialState = {
    chooseMood: [
        {
            mood: 'Great',
            icon: great,
            id: 1, 
        },
        {
            mood: 'Normally',
            icon: norm,
            id: 2, 
        },
        {
            mood: 'Can be',
            icon: canBe, 
            id: 3,
        },
        {
            mood: 'Not well',
            icon: notGood, 
            id: 4,
        },
        {
            mood: 'Awful',
            icon: awful, 
            id: 5,
        }
    ],
    emotions: [
        {
            nameOfEm:"Sadness",
            id:1

    }, {  
            nameOfEm:"Joy",
            id:2
    }, { 
            nameOfEm: "Anger",
            id:2,
    }, {
            nameOfEm:"Abomination",
            id:3
    }, {
            nameOfEm:"Shame",
            id:4
    }, 
       {
            nameOfEm:"Fear",
            id:5,
    }, 
        {
            nameOfEm:"Curiosity",
            id:6,

        },
        {
            nameOfEm:"Impotence",
            id:7,
        
        }, 
        {
            nameOfEm:"Surprise",
            id:8
        } 
    ],

    diaryPages : [

  ], 
  isLoggedIn: false,
  isNotAdmin: false,
  }

export const diaryPagesSlice = createSlice({
  name: 'diaryPages',
  initialState: initialState,

  reducers: {
   addNewPage (state, actions) {
        state.diaryPages.push (
            actions.payload
    )
},
    updatePage (state=initialState, actions) {
        
        const up = state.diaryPages.find(item => item.id==actions.payload.id);
        console.log(up);
        
        if(up) {
            up.mood = actions.payload.mood;
            up.notion = actions.payload.notion; 
            up.emotions = actions.payload.emotions;
    
        };
        
    },
    setLoggedIn (state, actions) {
        state.isLoggedIn= true;
    },
    setLoggedOut (state, actions) {
        state.isLoggedIn= false;
    },
    setIsNotAdmin (state, actions) {
        state.isNotAdmin= true;
    },
    setIsAdmin (state, actions) {
        state.isNotAdmin= false;
    }
   }
  
})

export const {addNewPage, updatePage, setLoggedIn, setLoggedOut, setIsNotAdmin, setIsAdmin} = diaryPagesSlice.actions;

export default diaryPagesSlice.reducer