import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CardResultType, CardType} from "../types/cards";

interface ThunkConfig {
    extra : any;
    rejectValue: string;
}


export const fetchCards = createAsyncThunk<CardResultType, void, ThunkConfig>(
    'fetchCards',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<CardResultType>('https://rickandmortyapi.com/api/character/?page=1')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить карточки")
        }
    }
)

export const fetchCard = createAsyncThunk<CardType, string, ThunkConfig>(
    'fetchCard',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get<CardType>(`https://rickandmortyapi.com/api/character/${id}`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить карточку")
        }
    }
)
