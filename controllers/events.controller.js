import { validationResult } from 'express-validator';
import Events from '../models/events.js';

class EventsController {
    async createEvent(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ message: 'Incorrect data', errors });
            }
            const event = await Events.create({
                ...req.body,
            });
            return res.json(event);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async readEvent(req, res) {
        try {
            const { id } = req.query;
            const event = await Events.findOne({ _id: id });
            if (event) {
                return res.json(event);
            }
            res.status(400).json({ message: 'Event not found' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async updateEvent(req, res) {
        try {
            const { _id, name, date, description, fields, enable } = req.body;
            const event = await Events.findOne({ _id });
            if (!event) {
                return res.status(400).json({ message: 'Event not found' });
            }

            const filter = { _id };
            const update = {
                name,
                date,
                description,
                fields,
                enable,
            };

            const newEvent = await Events.findOneAndUpdate(filter, update, {
                new: true,
            });

            res.json(newEvent);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async deleteEvent(req, res) {
        try {
            const { _id } = req.body;

            const result = await Events.deleteOne({ _id });

            if (result.deletedCount > 0) {
                return res.json({ message: 'Page was deleted' });
            }

            res.status(400).json({ message: 'Something going wrong' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new EventsController();
