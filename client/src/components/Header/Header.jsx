import {Link, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdClose, MdNoteAlt} from 'react-icons/md'
import {BsInstagram, BsTelephone} from 'react-icons/bs'
import './header.scss';
import '../../utils/styles/_utils.scss';


const Header = () => {
    const navigate = useNavigate();
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    const toggleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen);
    }

    const navClass = classNames({'header__nav': true, 'nav': true, 'nav--close': !isBurgerOpen})

    return <header className='header'>
        <div className="container header__container">
            {window.innerWidth < 1200 && <button className='header__burger' onClick={toggleBurger}>
                {isBurgerOpen && <MdClose className='header__img'/>}
                {!isBurgerOpen && <GiHamburgerMenu className='header__img'/>}
            </button>}
            <Link to='/' className='header__link'>
                <img src='../img/logo_white.png' alt='mail logo' className='header__logo' width={100} height={71}/>
            </Link>
            <ul className={navClass}>
                <li className='nav__item'>
                    <Link to="/all-courses" className="nav__link">Все услуги</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/team-building" className="nav__link">Корпоративы</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/contacts" className="nav__link">Контакты</Link>
                </li>
                <li className='nav__item nav__item--mobile nav__item--colored'>
                    <Link to="/registration" className="nav__link">Регистрация</Link>
                </li>
                <li className='nav__item nav__item--special'>
                    <a href="https://www.instagram.com/" target='_blank' className="nav__social">
                        <BsInstagram className='nav__icon'/>
                    </a>
                    <BsTelephone className='nav__icon nav__icon--accent'/>
                    <a href="tel:+380123456789" className="nav__tel">+380123456789</a>
                </li>
            </ul>
            <button className='header__button' onClick={() => {
                navigate('/registration')
            }}>
                <MdNoteAlt className='header__registration header__registration--img'/>
                <span className='header__registration header__registration--text'>Регистрация на игру</span>
            </button>
        </div>
    </header>;
}

export default Header;