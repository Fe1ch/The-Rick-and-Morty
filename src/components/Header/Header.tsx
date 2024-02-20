import './Header.css';
// @ts-ignore
import logo from '../../assets/icons/rick-and-morty-logo.svg';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            {/*<Link to={}>*/}
                <img src={logo} alt="logo" className='header__logo' />
            {/*</Link>*/}
        </header >
    );
};

export default Header;