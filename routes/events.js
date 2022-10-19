import Router from 'express';
import { check } from 'express-validator';
import EventsController from '../controllers/events.controller.js';

const eventsRouter = new Router();

eventsRouter.post(
    '/',
    [
        check('title', "Title can't is empty").notEmpty(),
        check('date', "Date can't is empty").notEmpty(),
        check('description', "Description can't is empty").notEmpty(),
        check('fields', "Fields can't is empty").notEmpty(),
        check('enable', "Enable can't is empty").notEmpty(),
    ],
    EventsController.createEvent
);

eventsRouter.get('/', EventsController.readEvent);

eventsRouter.put(
    '/',
    [
        check('id', "ID can't is empty").notEmpty(),
        check('title', "Title can't is empty").notEmpty(),
        check('date', "Date can't is empty").notEmpty(),
        check('letterSubject', "Date can't is empty").notEmpty(),
        check('LetterHtml', "Date can't is empty").notEmpty(),
        check('fields', "Fields can't is empty").notEmpty(),
        check('enable', "Enable can't is empty").notEmpty(),
    ],
    EventsController.updateEvent
);

eventsRouter.delete(
    '/',
    [check('id', "ID can't is empty").notEmpty()],
    EventsController.deleteEvent
);

export default eventsRouter;
