import axios from '../utils/instance/instance';

export const login = async (username, password) => {
    const { data } = await axios.post('/auth/login', { username, password });
    return data;
};

export const admin = async (token) => {
    console.log(token);
    const { data } = await axios.post('/auth/admin', { token });
    return data;
};
