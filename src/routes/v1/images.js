import * as image from "../../controllers";

export default (routes) => {
    routes.get("/images", image.imageController.getImages);
};
