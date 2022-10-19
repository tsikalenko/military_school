import jwt from 'jsonwebtoken';
import { KEY } from '../config.js';

const checkAdmin = (token) => {
    const { isAdmin } = jwt.verify(token, KEY);
    return isAdmin;
};

export default checkAdmin;
