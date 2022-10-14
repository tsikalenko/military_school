import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ParticipantsSchema = new Schema(
    {
        eventId: {
            type: Schema.Types.ObjectId,
            ref: 'events',
            required: true,
        },
        data: {
            type: Schema.Types.Mixed,
            required: true,
        },
    },
    { timestamps: true }
);

const Participants = mongoose.model('pages', ParticipantsSchema);

export default Participants;
