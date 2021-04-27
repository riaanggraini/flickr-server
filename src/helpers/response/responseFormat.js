const response = (status, msg, meta, data) => ({
    status,
    message: msg,
    meta,
    data,
});

module.exports = response;
