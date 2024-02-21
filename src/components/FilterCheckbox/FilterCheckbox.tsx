import './FilterCheckbox.css';
import {useAppDispatch, useAppSelector} from "../../StoreProvider/config/store";
import {ChangeEvent} from "react";
import {setFilterCards} from "../../entities/Cards/model/slice/cardsSlice";


export const FilterCheckbox = () => {

    const dispatch = useAppDispatch()
    const {isFilter} = useAppSelector(state => state.cards)

    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
     dispatch(setFilterCards(e.target.checked))
    }
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__switch">
                <input
                    className='filter-checkbox__input'
                    id='checkbox'
                    name='likedFacts'
                    type="checkbox"
                    checked={isFilter}
                    onChange={handleFilter}
                />
                <span className="filter-checkbox__slider"></span>
            </label>
            <label className="filter-checkbox__text" htmlFor="checkbox">Понравившиеся герои</label>
        </div>
    );
}