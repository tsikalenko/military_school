import Router from 'express';
import { sendSuccessfulPayment } from '../helpers/sendMessageTeamBuilding.js';

const paymentRouter = new Router();

paymentRouter.post('/successful', sendSuccessfulPayment);
paymentRouter.post('/error', (req, res) => {
    res.redirect('../../payment/error');
});

export default paymentRouter;
