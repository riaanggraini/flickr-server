
export const errMessage = (key) => {
    const success = `${key} success`;
    const notFound = `Resource not found: ${key}`;
    const somethingWentWrong = "something went wrong, please try again a moment";

	return { // eslint-disable-line
        success,
        notFound,
        somethingWentWrong,
    };
};
