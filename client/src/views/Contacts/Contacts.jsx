import { BsInstagram, BsTelephone } from 'react-icons/bs';
import { FaViber, FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './contacts.scss';
import '../../utils/styles/_utils.scss';
import { useEffect, useState } from 'react';
import { getPage } from '../../api/pagesAPI';

const Contacts = () => {
    const [pageInfo, setPageInfo] = useState({});
    const [isErrorLoading, setIsErrorLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setPageInfo((await getPage('team-building')).data);
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    return (
        <div className='contacts container'>
            <h2 className='contacts__title'>Our contacts</h2>

            <a
                href='tel:+380953594482'
                className='contacts__phone'
                rel='noreferrer'
            >
                <BsTelephone className='contacts__icon contacts__icon--accent' />
                <p className='contacts__tel'>+380953594482</p>
            </a>

            <a
                href='tel:+380733594482'
                className='contacts__phone'
                rel='noreferrer'
            >
                <BsTelephone className='contacts__icon contacts__icon--accent' />
                <p className='contacts__tel'>+380733594482</p>
            </a>

            <a
                href='tel:+380677741949'
                className='contacts__phone'
                rel='noreferrer'
            >
                <BsTelephone className='contacts__icon contacts__icon--accent' />
                <p className='contacts__tel'>+380677741949</p>
            </a>

            <a
                href='mailto:militari.shop.ua@gmail.com'
                className='contacts__mail'
                rel='noreferrer'
            >
                <FiMail className='contacts__icon contacts__icon--accent' />
                <p className='contacts__tel'>militari.shop.ua@gmail.com</p>
            </a>

            <a
                href='tg://resolve?domain=military_school'
                target='_blank'
                className='contacts__social'
                rel='noreferrer'
            >
                <FaTelegramPlane className='contacts__icon contacts__icon--blue' />
                <span className='contacts__username'>@military_school</span>
            </a>

            <a
                href='viber://chat/?number=%2B380123456789'
                target='_blank'
                className='contacts__social'
                rel='noreferrer'
            >
                <FaViber className='contacts__icon contacts__icon--violet' />
                <span className='contacts__username'>+380123456789</span>
            </a>

            <a
                href='https://www.instagram.com/militaryschool_kyiv/'
                target='_blank'
                className='contacts__social'
                rel='noreferrer'
            >
                <BsInstagram className='contacts__icon contacts__icon--pink' />
                <span className='contacts__username'>@militaryschool_kyiv</span>
            </a>
        </div>
    );
};

export default Contacts;
