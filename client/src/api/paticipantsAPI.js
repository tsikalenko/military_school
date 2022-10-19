import axios from '../utils/instance/instance';

export const createParticipant = async (newParticipant) => {
    const { data } = await axios.post('/participants', newParticipant);
    return data;
};

export const getParticipantOfEvents = async (eventId, token) => {
    const { data } = await axios.post('/participants/event', {
        eventId,
        token,
    });
    return data;
};
