import Router from 'express';
import { check } from 'express-validator';
import sendMessageTeamBuilding from '../helpers/sendMessageTeamBuilding.js';

const participantsRouter = new Router();

participantsRouter.post(
    '/team-building',
    [
        check('name', "name can't is empty").notEmpty(),
        check('phone', "phone can't is empty").notEmpty(),
        check('quantity', "quantity can't is empty").notEmpty(),
    ],
    sendMessageTeamBuilding
);

export default participantsRouter;
