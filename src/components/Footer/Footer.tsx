import './Footer.css';

export const Footer = () => {
    return (

        <footer className="footer">
            <div className='footer__container'>
                <p className='footer__copyright'>© Михаил Мякинин {new Date().getFullYear()}</p>
                <div className='footer__links'>
                    <a href="https://github.com/Fe1ch" target='blank' className='footer__link'>Github</a>
                </div>
            </div>
        </footer>

    )
}