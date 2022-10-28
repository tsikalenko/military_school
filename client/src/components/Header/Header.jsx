import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose, MdNoteAlt } from 'react-icons/md';
import { BsInstagram, BsTelephone } from 'react-icons/bs';

import './header.scss';
import '../../utils/styles/_utils.scss';

const Header = () => {
    const navigate = useNavigate();
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    const openBurger = () => {
        setIsBurgerOpen(true);
    };
    const closeBurger = () => {
        setIsBurgerOpen(false);
    };

    useEffect(() => {
        if (width < 1200 && isBurgerOpen) {
            document.addEventListener('click', function func(event) {
                if (
                    event.target.closest('a') ||
                    (!event.target.closest('header') &&
                        !event.target.closest('.header__burger'))
                ) {
                    setIsBurgerOpen(false);
                    document.removeEventListener('click', func);
                }
            });
        }
    }, [width, isBurgerOpen]);

    const navClass = classNames({
        header__nav: true,
        nav: true,
        'nav--close': !isBurgerOpen,
    });

    return (
        <header className='header'>
            <div className='header__container container'>
                {width < 1200 && isBurgerOpen && (
                    <button className='header__burger' onClick={closeBurger}>
                        <MdClose className='header__img' />
                    </button>
                )}
                {width < 1200 && !isBurgerOpen && (
                    <button className='header__burger' onClick={openBurger}>
                        <GiHamburgerMenu className='header__img' />
                    </button>
                )}
                <Link to='/' className='header__link'>
                    <img
                        src='https://res.cloudinary.com/dv6xzqwka/image/upload/v1666514364/logo_white_clrx9s.png'
                        alt='mail logo'
                        className='header__logo'
                        width={100}
                        height={71}
                    />
                </Link>
                <ul className={navClass}>
                    <li className='nav__item'>
                        <Link to='/all-courses' className='nav__link'>
                            Усі послуги
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/team-building' className='nav__link'>
                            Корпоративи
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/contacts' className='nav__link'>
                            Контакти
                        </Link>
                    </li>
                    <li className='nav__item nav__item--mobile nav__item--colored'>
                        <Link to='/registration' className='nav__link'>
                            Запис на курс
                        </Link>
                    </li>
                    <li className='nav__item nav__item--special'>
                        <a
                            href='https://www.instagram.com/militaryschool_kyiv/'
                            target='_blank'
                            className='nav__social'
                            rel='noreferrer'
                        >
                            <BsInstagram className='nav__icon' />
                        </a>
                        <BsTelephone className='nav__icon nav__icon--accent' />
                        <a href='tel:+380123456789' className='nav__tel'>
                            +380123456789
                        </a>
                    </li>
                </ul>
                <button
                    className='header__button'
                    onClick={() => {
                        navigate('/registration');
                    }}
                >
                    <MdNoteAlt className='header__registration header__registration--img' />
                    <span className='header__registration header__registration--text'>
                        Запис на курс
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
