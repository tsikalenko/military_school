import { validationResult } from 'express-validator';
import Pages from '../models/pages.js';

class PagesController {
    async createPage(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ message: 'Incorrect data', errors });
            }
            const { name } = req.body;
            const existingUser = await Pages.findOne({ name });
            if (existingUser) {
                return res
                    .status(400)
                    .json({ message: 'This page is created earlier' });
            }
            const page = await Pages.create({
                ...req.body,
            });

            return res.json(page);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async readPage(req, res) {
        try {
            const { name } = req.body;
            const page = await Pages.findOne({ name });
            if (page) {
                return res.json(page);
            }
            res.status(400).json({ message: 'User not found' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async updatePage(req, res) {
        try {
            const { _id, name, data } = req.body;
            const oldPage = await Pages.findOne({ _id });
            if (!oldPage) {
                return res.status(400).json({ message: 'Page not found' });
            }
            const page = await Pages.find({ name });

            if (name !== oldPage.username && page.length > 0) {
                return res
                    .status(400)
                    .json({ message: 'This page name is busy' });
            }

            const filter = { _id };
            const update = {
                name,
                data,
            };

            const newPage = await Pages.findOneAndUpdate(filter, update, {
                new: true,
            });

            res.json(newPage);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async deletePage(req, res) {
        try {
            const { _id } = req.body;

            const result = await Pages.deleteOne({ _id });

            if (result.deletedCount > 0) {
                return res.json({ message: 'User was deleted' });
            }

            res.status(400).json({ message: 'Something going wrong' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new PagesController();
