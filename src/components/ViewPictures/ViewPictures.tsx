import './ViewPictures.css'
import {useNavigate, useParams,} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../StoreProvider/config/store";
import {useEffect} from "react";
import {fetchCard} from "../../entities/Cards/model/actions/cardsActions";


export const ViewPictures = () => {

    const dispatch = useAppDispatch()
    const {card} = useAppSelector(state => state.cards)

    const {id} = useParams()

    useEffect(() => {
        if( id ) {
            dispatch(fetchCard(id))
        }
    }, [dispatch,id])

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }

    return (
        <section className='view-picture'>
            <img
                src={card?.image}
                alt="Картинка"
                className='view-picture__image'
            />
            <p
                className='view-picture__text'>
                {card?.name}
            </p>
            <button
                className='button button__back'
                onClick={handleBackClick}
            >
                Вернуться обратно
            </button>
        </section>
    );
};

