import './footer.scss';
import {Link} from "react-router-dom";
import {BsTelephone} from "react-icons/bs";

const Footer = () => {
    return <footer className='footer'>
        <div className="container footer__container">
            <Link to='/' className='footer__link'>
                <img src='../img/logo_white.png' alt='mail logo' className='footer__logo' width={150} height={107}/>
            </Link>
            <div className="footer__info">
                <p className='footer__address'>Україна, Київ, вул. Набережно-Лугова, 6</p>
                <div className="footer__contacts">
                    <BsTelephone className='footer__icon footer__icon--accent'/>
                    <a href="tel:+380123456789" className="footer__tel">+380123456789</a>
                </div>
            </div>
            <ul className="footer__nav nav">
                <li className='nav__item'>
                    <Link to="/all-courses" className="nav__link">Все услуги</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/team-building" className="nav__link">Корпоративы</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/contacts" className="nav__link">Контакты</Link>
                </li>
                <li className='nav__item nav__item--accent'>
                    <Link to="/registration" className="nav__link">Регистрация</Link>
                </li>
            </ul>
        </div>
    </footer>;
}

export default Footer;