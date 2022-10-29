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
        const { email, phone, amount, currency, comment, transactionStatus } =
            req.body;

        // await sendToTelegram(
        //     `<b>Нова сплата</b>\nEmail: ${email}\nТелефон: ${phone}\nСумма: ${amount} ${currency}\nКоментар: ${comment}\ntransactionStatus: ${transactionStatus}`
        // );
        //
        // return res.redirect('../../payment/successful');
        return res.json({ body: req.body, req });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
