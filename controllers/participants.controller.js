import { validationResult } from 'express-validator';
import Participants from '../models/participants.js';

class ParticipantsController {
    async createParticipant(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ message: 'Incorrect data', errors });
            }
            const event = await Participants.create({
                ...req.body,
            });
            return res.json(event);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async readParticipant(req, res) {
        try {
            const { id } = req.query;
            const event = await Participants.findOne({ _id: id });
            if (event) {
                return res.json(event);
            }
            res.status(400).json({ message: 'Event not found' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async eventsParticipant(req, res) {
        try {
            const { eventId } = req.query;
            const event = await Participants.find({ eventsId: eventId });
            if (event) {
                return res.json(event);
            }
            res.status(400).json({ message: 'Event not found' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async updateParticipants(req, res) {
        try {
            const { _id, eventID, data } = req.body;
            const event = await Participants.findOne({ _id });
            if (!event) {
                return res.status(400).json({ message: 'Event not found' });
            }

            const filter = { _id };
            const update = {
                eventID,
                data,
            };

            const newEvent = await Participants.findOneAndUpdate(
                filter,
                update,
                {
                    new: true,
                }
            );

            res.json(newEvent);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async deleteParticipant(req, res) {
        try {
            const { _id } = req.body;

            const result = await Participants.deleteOne({ _id });

            if (result.deletedCount > 0) {
                return res.json({ message: 'Page was deleted' });
            }

            res.status(400).json({ message: 'Something going wrong' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new ParticipantsController();
