import { BsInstagram, BsTelephone } from 'react-icons/bs';
import { FaViber, FaTelegramPlane } from 'react-icons/fa';
import './contacts.scss';
import '../../utils/styles/_utils.scss';

const Contacts = () => {
    return (
        <div className='contacts container'>
            <h2 className='contacts__title'>Our contacts</h2>
            <a
                className='contacts__address'
                target='_blank'
                href='https://goo.gl/maps/oSLHAgKbLhdpjrtBA'
                rel='noreferrer'
            >
                Україна, Київ, вул. Хрещатик, 1
            </a>

            <a
                href='tel:+380123456789'
                className='contacts__phone'
                rel='noreferrer'
            >
                <BsTelephone className='contacts__icon contacts__icon--accent' />
                <p className='contacts__tel'>+380123456789</p>
            </a>

            <a
                href='tel:+380123456789'
                className='contacts__phone'
                rel='noreferrer'
            >
                <BsTelephone className='contacts__icon contacts__icon--accent' />
                <p className='contacts__tel'>+380123456789</p>
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
                href='https://www.instagram.com/'
                target='_blank'
                className='contacts__social'
                rel='noreferrer'
            >
                <BsInstagram className='contacts__icon contacts__icon--pink' />
                <span className='contacts__username'>@military_school</span>
            </a>
        </div>
    );
};

export default Contacts;
