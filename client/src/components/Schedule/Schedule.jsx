import './schedule.scss';
import '../../utils/styles/_utils.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPage } from '../../api/pagesAPI';

const Schedule = () => {
    const [pageInfo, setPageInfo] = useState({});
    const [isErrorLoading, setIsErrorLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setPageInfo((await getPage('schedule')).data);
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const renderEvents = () => {
        return pageInfo.events.map((event) => {
            return (
                <Link
                    //change to link
                    key={event.name}
                    to={event.link}
                    className='schedule__item'
                    style={{
                        backgroundImage: `url("${event.img}")`,
                    }}
                >
                    <h3 className='schedule__title'>{event.name}</h3>
                    <p className='schedule__date'>{event.date}</p>
                </Link>
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
                <div className='schedule'>{renderEvents()}</div>
            )}
        </>
    );
};

export default Schedule;
