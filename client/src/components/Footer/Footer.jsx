import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';

import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer__container'>
                <Link to='/' className='footer__link'>
                    <img
                        src='https://res.cloudinary.com/dv6xzqwka/image/upload/v1666514364/logo_white_clrx9s.png'
                        alt='mail logo'
                        className='footer__logo'
                        width={150}
                        height={107}
                    />
                </Link>
                <div className='footer__info'>
                    <div className='footer__contacts'>
                        <BsTelephone className='footer__icon footer__icon--accent' />
                        <a href='tel:+380953594482' className='footer__tel'>
                            +380953594482
                        </a>
                    </div>
                    <div className='footer__contacts'>
                        <BsTelephone className='footer__icon footer__icon--accent' />
                        <a href='tel:+380733594482' className='footer__tel'>
                            +380733594482
                        </a>
                    </div>
                    <div className='footer__contacts'>
                        <BsTelephone className='footer__icon footer__icon--accent' />
                        <a href='tel:+380677741949' className='footer__tel'>
                            +380677741949
                        </a>
                    </div>
                </div>
                <ul className='footer__nav nav'>
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
                    <li className='nav__item nav__item--accent'>
                        <Link to='/registration' className='nav__link'>
                            Запис на тренування
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
