import axios from 'axios';
import { BOT_TOKEN, CHAT_ID } from '../config/config';

export const sendLead = (message) => {
    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'html',
    });
};
