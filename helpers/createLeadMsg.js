const createLeadMsg = (data, eventInfo) => {
    const keys = Object.keys(data);
    const fields = keys.map((field) => {
        return `\n<b>${field}</b>: ${data[field]}`;
    });
    return `<b>${eventInfo.title}</b>\n${eventInfo.date}\n${fields}`;
};

export default createLeadMsg;
