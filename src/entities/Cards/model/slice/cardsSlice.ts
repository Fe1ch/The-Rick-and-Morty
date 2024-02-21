import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardsType, CardType} from "../types/cards";
import {fetchCard, fetchCards} from "../actions/cardsActions";

const initialState: CardsType = {
    cards: [],
    isLoading: false,
    error: '',
    isFilter: false,
    card: null,
};

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addLike(state, action: PayloadAction<number>) {
            if (state.cards) {
                const cards = state.cards.map(card => card.id === action.payload ? {...card, isLiked: true} : card);
                state.cards = cards
                localStorage.setItem('cards', JSON.stringify(cards));

            }
        },
        removeLike(state, action: PayloadAction<number>) {
            if (state.cards) {
                const cards = state.cards.map(card => card.id === action.payload ? {...card, isLiked: false} : card);
                state.cards = cards
                localStorage.setItem('cards', JSON.stringify(cards));
            }

        },
        deleteCard(state, action: PayloadAction<number>) {
            const cards = state.cards.filter(card => card.id !== action.payload);
            state.cards = cards
            localStorage.setItem('cards', JSON.stringify(cards));
        },
        setFilterCards(state, action: PayloadAction<boolean>) {
            state.isFilter = action.payload
            localStorage.setItem('filtersCards', JSON.stringify(action.payload));
        },
        getFilterCards(state, action: PayloadAction<CardType[]>) {
            state.cards = action.payload
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(fetchCards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = ''
                state.cards = action.payload.results
            }).addCase(fetchCards.pending, (state) => {
                state.isLoading = true;
            }).addCase(fetchCards.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }).addCase(fetchCard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = ''
                state.card = action.payload
            }).addCase(fetchCard.pending, (state) => {
                state.isLoading = true;
            }).addCase(fetchCard.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        }
});


export const {addLike, removeLike, deleteCard, setFilterCards, getFilterCards} = cardsSlice.actions;
export default cardsSlice.reducer;
