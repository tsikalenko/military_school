import sendToTelegram from './sendToTelegram.js';

const sendMessageTeamBuilding = async (req, res) => {
    try {
        const { name, phone, quantity } = req.body;

        await sendToTelegram(
            `<b>Розрахунок корпоративу</b>\nІм'я: ${name}\nТелефон: ${phone}\nКількість чоловік: ${quantity}`
        );

        return res.json();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default sendMessageTeamBuilding;