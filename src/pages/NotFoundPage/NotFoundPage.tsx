 import './NotFoundPage.css'
 import {useNavigate} from "react-router-dom";

export const NotFoundPage = () => {

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1);
    }

    return (
        <div className="page-wrapper not-found-page">
            <h2 className='not-found-page__title'>Страница не найдена</h2>
            <button className="not-found-page__btn" onClick={handleBackClick}>Назад</button>
        </div>)

};
