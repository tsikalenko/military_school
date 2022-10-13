import Slider from '../../components/Slider';
import './teamBuilding.scss';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import { getPage } from '../../api/pagesAPI';

const TeamBuilding = () => {
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
        <>
            {isErrorLoading ? (
                <h2 className='error'>
                    Нажаль, виникла проблема зі завантаженням сторінки,
                    спробуйте оновити сторінку
                </h2>
            ) : Object.keys(pageInfo).length === 0 ? (
                <h2 className='loading'>Loading...</h2>
            ) : (
                <div className='team-building container'>
                    <h2 className='team-building__title'>{pageInfo.title}</h2>

                    <div className='team-building__header'>
                        <Slider slides={pageInfo.slider} />

                        <div className='team-building__info'>
                            <h3 className='team-building__subtitle'>
                                {pageInfo.info.title}
                            </h3>
                            <p className='team-building__text'>
                                {pageInfo.info.description}
                            </p>
                            <HashLink
                                to='/team-building#form'
                                className='button button--center button--accent button--fifteen'
                            >
                                Заказать рассчет
                            </HashLink>
                        </div>
                    </div>

                    <p className='team-building__text'>{pageInfo.text}</p>

                    <a id='form'></a>

                    <div className='team-building__form'>***form***</div>
                </div>
            )}
        </>
    );
};

export default TeamBuilding;
