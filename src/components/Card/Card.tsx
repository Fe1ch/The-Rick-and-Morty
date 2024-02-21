import "./Card.css";
import {Link} from "react-router-dom";
import {FC} from"react";
import {CardType} from "../../entities/Cards/model/types/cards";
import {useAppDispatch} from "../../StoreProvider/config/store";
import {addLike, deleteCard, removeLike} from "../../entities/Cards/model/slice/cardsSlice";

interface CardProps {
    card: CardType;
    isLiked?: boolean;
}

const Card : FC<CardProps>= ({card}) => {

    const dispatch = useAppDispatch()

    const handleLikeClick = () => {
        if (!card.isLiked) {
            dispatch(addLike(card.id));
        } else {
            dispatch(removeLike(card.id));
        }
    };

    const handleDeleteClick =()=>{
        dispatch(deleteCard(card.id))
    }
    
    return (
        <li
            className='card'
            >
            <Link
                to={`/cards/${card.id}`}
                className='cards__link'
                // onClick={}
            >
                <img
                    src={card.image}
                    alt="Картинка"
                    className='card__img'/>

                <h2 className='card__title'>{card.name}</h2>
            </Link>
            <button
                className='button button__delete'
                onClick={handleDeleteClick}
            />
            <button
                className={`button button__like ${card.isLiked ? "button__like_active" : ""}`}
                onClick={handleLikeClick}
            />
        </li>
    );
};

export default Card;
