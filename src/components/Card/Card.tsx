import "./Card.css";
import {Link} from "react-router-dom";

const Card = () => {

    
    return (
        <li
            className='card'
            key={1}>
            <Link
                to=''
                className='cards__link'
                // onClick={}
            >
                <img
                    src={'/'}
                    alt="sad"
                    className='card__img'/>

                <h2 className='card__title'>111</h2>
                <div className='card__container'>
                    <p className='card__description'></p>
                </div>
            </Link>
            <button
                className='button button__delete'
                // onClick={}
            />
            <button
                className='button button__like'
                // className={'button button__like button__like_active' : 'button button__like'}
                // onClick={}
            />
        </li>
    );
};

export default Card;
