import axios from '../utils/instance/instance';

export const getPage = async (name) => {
    const { data } = await axios.get(`/pages?name=${name}`);
    return data;
};
