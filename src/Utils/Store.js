import { configureStore } from "@reduxjs/toolkit";
import AppSLice from "./AppSLice";
import ChatSlice from "./ChatSlice";

const Store = configureStore({
   reducer: {
    app: AppSLice,
    chat: ChatSlice
   }
});

export default Store;