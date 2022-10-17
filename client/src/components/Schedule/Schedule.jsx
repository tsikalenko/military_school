import './schedule.scss';
import '../../utils/styles/_utils.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../../api/eventsAPI';
import PropTypes from 'prop-types';

const Schedule = ({ type }) => {
    const [events, setEvents] = useState({});
    const [isErrorLoading, setIsErrorLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setEvents(await getAllEvents());
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const renderEvents = () => {
        return events.map((event) => {
            if (event.enable) {
                return (
                    <Link
                        key={event._id}
                        to={
                            type === 'edit'
                                ? `/edit/events/${event._id}`
                                : `/events/${event._id}`
                        }
                        className='schedule__item'
                        style={{
                            backgroundImage:
                                'url(https://res.cloudinary.com/dkngcqeid/image/upload/v1665554630/military_school/schedule_nyacni.jpg)',
                        }}
                    >
                        <h3 className='schedule__title'>{event.title}</h3>
                        <p className='schedule__date'>{event.date}</p>
                    </Link>
                );
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
            ) : Object.keys(events).length === 0 ? (
                <h2 className='loading'>Loading...</h2>
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
