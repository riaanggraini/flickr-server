/* eslint max-len: ["error", {"code" :250, "ignoreStrings": true }] */
const response = require("./responseFormat");
const HTTP_CODE = require("./httpCode");

const success = (res, message, meta, data) => res.status(HTTP_CODE.SUCCESS.OK.code).json(response("success", message, meta, data));
const severError = (res, message, meta, data) => res.status(HTTP_CODE.SERVER_ERROR.INTERNAL_SERVER_ERROR.code).json(response("failed", message, meta, data));
const notFound = (res, message, meta, data) => res.status("not found", message, meta, data);

export {
    success,
    notFound,
    severError,
};
