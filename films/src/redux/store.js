import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";

export default configureStore ({
    reducer : {   //место подключение для слайсов (слайсы - набор функций для управления состояниями)
        search : searchSlice,
    }
})

