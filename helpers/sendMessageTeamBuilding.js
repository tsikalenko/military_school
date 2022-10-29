import sendToTelegram from './sendToTelegram.js';

export const sendMessageTeamBuilding = async (req, res) => {
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

export const sendSuccessfulPayment = async (req, res) => {
    try {
        const { email, phone, amount, currency } = req.body;

        await sendToTelegram(
            `<b>Нова сплата</b>\nEmail: ${email}\nТелефон: ${phone}\nСумма: ${amount} ${currency}`
        );

        return res.redirect('../../payment/successful');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
