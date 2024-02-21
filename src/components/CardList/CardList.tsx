import "./CardList.css";
import React, {useEffect, useMemo} from "react";
import Card from "../Card/Card";
import {FilterCheckbox} from "../FilterCheckbox/FilterCheckbox";
import {useAppDispatch, useAppSelector} from "../../StoreProvider/config/store";
import {fetchCards} from "../../entities/Cards/model/actions/cardsActions";
import {getFilterCards, setFilterCards} from "../../entities/Cards/model/slice/cardsSlice";

export const CardList: React.FC = () => {
    const dispatch = useAppDispatch();

    const {cards, isLoading, error, isFilter} = useAppSelector(state => state.cards)


    useEffect(() => {
        const filtersCards = localStorage.getItem('filtersCards')
        const storedCards = localStorage.getItem('cards');
        if (storedCards) {
            const parseStoredCards = JSON.parse(storedCards)
            dispatch(getFilterCards(parseStoredCards))
            if(filtersCards) {
                dispatch(setFilterCards(JSON.parse(filtersCards)))
            }
            if(parseStoredCards.length === 0){
                dispatch(fetchCards())
            }
        } else {
            dispatch(fetchCards())
            dispatch(setFilterCards(false))
        }
    }, [dispatch])



    const filteredCards = useMemo(() => {
        return isFilter ? cards.filter((card) => card.isLiked) : cards
    }, [isFilter, cards])

    return (
        <section className='cards'>
            <FilterCheckbox/>
            <ul className='cards__list'>
                {filteredCards && filteredCards.map(card => (
                    <Card key={card.id} card={card}/>
                ))}
            </ul>
        </section>
    );
};
