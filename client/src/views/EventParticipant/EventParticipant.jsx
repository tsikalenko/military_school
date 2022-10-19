import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getParticipantOfEvents } from '../../api/paticipantsAPI';
import './eventParticipant.scss';
import '../../utils/styles/_utils.scss';

const EventParticipant = () => {
    const [participantsList, setParticipantsList] = useState({});
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const { eventId } = useParams();
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        (async () => {
            try {
                setParticipantsList(
                    await getParticipantOfEvents(eventId, token)
                );
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const renderParticipantsList = () => {
        return participantsList.map((participant, index) => {
            const keys = Object.keys(participant.data);
            return (
                <div key={participant._id} className='event-participants__item'>
                    <h3 className='event-participants__name'>
                        Учасник {index + 1}
                    </h3>
                    {keys.map((field) => (
                        <div key={field} className='event-participants__field'>
                            <p className='event-participants__subtitle'>
                                {field}:
                            </p>
                            <p className='event-participants__value'>
                                {participant.data[field]}
                            </p>
                        </div>
                    ))}
                </div>
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
            ) : Object.keys(participantsList).length === 0 ? (
                <h2 className='loading'>Loading...</h2>
            ) : (
                <div className='event-participants container container--page'>
                    <h2 className='title'>Список учасників події</h2>
                    {renderParticipantsList()}
                    <Link
                        to={`/events/data/${eventId}`}
                        className='button button--border'
                    >
                        Назад
                    </Link>
                </div>
            )}
        </>
    );
};

export default EventParticipant;
