import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EventsSchema = new Schema(
    {
        title: {
            type: Schema.Types.String,
            required: true,
        },
        date: {
            type: Schema.Types.String,
            required: true,
        },
        description: {
            type: Schema.Types.String,
            required: true,
        },
        fields: {
            type: Schema.Types.Mixed,
            required: true,
        },
        enable: {
            type: Schema.Types.Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

const Events = mongoose.model('events', EventsSchema);

export default Events;
