import axios from "axios";

const get = async (url, headers = {}) => {
    try {
        const response = await axios({
            method: "GET",
            timeout: 4000,
            url,
            headers,
        });
        return response;
    } catch (err) {
        return err;
    }
};

export {
    get,
};
