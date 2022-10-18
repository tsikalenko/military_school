import Router from 'express';
import { check } from 'express-validator';
import ParticipantsController from '../controllers/participants.controller.js';

const participantsRouter = new Router();

participantsRouter.post(
    '/',
    [
        check('eventId', "eventId can't is empty").notEmpty(),
        check('data', "data can't is empty").notEmpty(),
    ],
    ParticipantsController.createParticipant
);

participantsRouter.post(
    '/',
    [
        check('id', "ID can't is empty").notEmpty(),
        check('token', "Token can't is empty").notEmpty(),
    ],
    ParticipantsController.readParticipant
);

participantsRouter.post(
    '/event',
    [
        check('eventId', "eventId can't is empty").notEmpty(),
        check('token', "Token can't is empty").notEmpty(),
    ],
    ParticipantsController.eventsParticipant
);

participantsRouter.put(
    '/',
    [
        check('eventId', "eventId can't is empty").notEmpty(),
        check('data', "data can't is empty").notEmpty(),
        check('token', "Token can't is empty").notEmpty(),
    ],
    ParticipantsController.updateParticipants
);

participantsRouter.delete(
    '/',
    [
        check('id', "ID can't is empty").notEmpty(),
        check('token', "Token can't is empty").notEmpty(),
    ],
    ParticipantsController.deleteParticipant
);

export default participantsRouter;
