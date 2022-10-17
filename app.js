import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bp from 'body-parser';
import * as path from 'path';
import pagesRouter from './routes/pages.js';
import usersRouter from './routes/users.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import eventsRouter from './routes/events.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use('/api/auth', usersRouter);
app.use('/api/pages', pagesRouter);
app.use('/api/events', eventsRouter);

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('DB connected');
    });

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        console.log(__dirname);
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
