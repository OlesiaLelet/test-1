import { configureStore } from "@reduxjs/toolkit";
import diaryPagesReducer from "./loterySlice";

export default configureStore ({
    reducer: {
     diaryPages: diaryPagesReducer,
    }
})