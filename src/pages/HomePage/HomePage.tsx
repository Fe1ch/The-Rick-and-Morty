import './HomePage.css'
import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <div className='page-wrapper home-page'>
            <h1 className='page-wrapper__title'>Добро пожаловать на просмотр героев из Rick and Morty</h1>
            <Link
                to={'/cards'}
                className='page-wrapper__btn'
            >
                Перейти
            </Link>
        </div>
    );
};