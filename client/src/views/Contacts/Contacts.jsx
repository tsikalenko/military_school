import { BsInstagram, BsTelephone } from 'react-icons/bs';
import { FaViber, FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getPage } from '../../api/pagesAPI';

import './contacts.scss';
import '../../utils/styles/_utils.scss';

const Contacts = () => {
    const [pageInfo, setPageInfo] = useState({});
    const [isErrorLoading, setIsErrorLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setPageInfo((await getPage('contacts')).data);
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const renderPhones = () => {
        return pageInfo.phones.map((phone) => {
            return (
                <a
                    href={`tel:${phone}`}
                    className='contacts__phone'
                    rel='noreferrer'
                    key={phone}
                >
                    <BsTelephone className='contacts__icon contacts__icon--accent' />
                    <p className='contacts__tel'>{phone}</p>
                </a>
            );
        });
    };

    return (
        <>
            {isErrorLoading ? (
                <h2 className='error'>
                    Нажаль, виникла проблема зі завантаженням сторінки,
                    спробуйте оновити сторінку
                </h2>
            ) : Object.keys(pageInfo).length === 0 ? (
                <h2 className='loading'>Loading...</h2>
            ) : (
                <div className='contacts container'>
                    <h2 className='contacts__title'>{pageInfo.title}</h2>

                    {renderPhones()}

                    <a
                        href={`mailto:${pageInfo.email}`}
                        className='contacts__mail'
                        rel='noreferrer'
                    >
                        <FiMail className='contacts__icon contacts__icon--accent' />
                        <p className='contacts__tel'>{pageInfo.email}</p>
                    </a>

                    <a
                        href={`tg://resolve?domain=&${pageInfo.telegram}`}
                        target='_blank'
                        className='contacts__social'
                        rel='noreferrer'
                    >
                        <FaTelegramPlane className='contacts__icon contacts__icon--blue' />
                        <span className='contacts__username'>
                            @{pageInfo.telegram}
                        </span>
                    </a>

                    <a
                        href={`viber://chat/?number=%2B${pageInfo.viber}`}
                        target='_blank'
                        className='contacts__social'
                        rel='noreferrer'
                    >
                        <FaViber className='contacts__icon contacts__icon--violet' />
                        <span className='contacts__username'>
                            +{pageInfo.viber}
                        </span>
                    </a>

                    <a
                        href={`https://www.instagram.com/${pageInfo.instagram}/`}
                        target='_blank'
                        className='contacts__social'
                        rel='noreferrer'
                    >
                        <BsInstagram className='contacts__icon contacts__icon--pink' />
                        <span className='contacts__username'>
                            @{pageInfo.instagram}
                        </span>
                    </a>
                </div>
            )}
        </>
    );
};

export default Contacts;
