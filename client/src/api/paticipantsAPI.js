import axios from '../utils/instance/instance';

export const createParticipant = async (newParticipant) => {
    const { data } = await axios.post('/participants', newParticipant);
    return data;
};
