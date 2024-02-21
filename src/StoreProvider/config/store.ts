import {
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";

import cardsReducer  from "../../entities/Cards/model/slice/cardsSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const rootReducer = combineReducers({
    cards: cardsReducer,
});
export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;