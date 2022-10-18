import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                <div key={participant._id}>
                    <h3>Учасник {index + 1}</h3>
                    {keys.map((field) => (
                        <div key={field}>
                            <p className='subtitle'>{field}</p>
                            <p className='subtitle'>
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
                <div className='container container--page'>
                    <h2 className='title'>Список учасників події</h2>
                    {renderParticipantsList()}
                </div>
            )}
        </>
    );
};

export default EventParticipant;
