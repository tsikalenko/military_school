import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../../api/eventsAPI';
import PropTypes from 'prop-types';

import './schedule.scss';
import '../../utils/styles/_utils.scss';

const Schedule = ({ type }) => {
    const [events, setEvents] = useState(null);
    const [isErrorLoading, setIsErrorLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setEvents((await getAllEvents()).reverse());
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const renderEvents = () => {
        return events.map((event) => {
            const item = (
                <Link
                    key={event._id}
                    to={
                        type === 'edit'
                            ? `/events/data/${event._id}`
                            : `/events/${event._id}`
                    }
                    className='schedule__item'
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/dv6xzqwka/image/upload/v1666514365/schedule1_jfg7kn.jpg)',
                    }}
                >
                    <h3 className='schedule__title'>{event.title}</h3>
                    <p className='schedule__date'>{event.date}</p>
                </Link>
            );
            if (type !== 'edit' && event.enable) {
                return item;
            }
            if (type === 'edit') {
                return item;
            }
        });
    };

    return (
        <>
            {isErrorLoading ? (
                <h2 className='error'>
                    Нажаль, виникла проблема зі завантаженням сторінки,
                    спробуйте оновити сторінку
                </h2>
            ) : events === null ? (
                <h2 className='loading'>Loading...</h2>
            ) : Object.keys(events).length === 0 ? (
                <h2 className='loading'>
                    Нажаль зараз відсутні відкріті реестрації
                </h2>
            ) : (
                <div className='schedule'>{renderEvents()}</div>
            )}
        </>
    );
};

Schedule.propTypes = {
    type: PropTypes.string,
};

export default Schedule;
