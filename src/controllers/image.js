import * as imageModule from "../modules/flickr";
import * as response from "../helpers/response/response";
import { errMessage } from "../helpers/response/message";

const getImages = async (req, res) => {
    try {
        const page = req.query.page || 1; // request query of page of pictures wanna showed
        const size = req.query.size || 10; // request query of size of pictures wanna showed
        const { search } = req.query; // request query of search by tag

        // call the image module
        const images = await imageModule.images.getImages(page, size, search);
        const photos = images.photos.photo;

        // map it to get data needed
        const arrayPictures = photos.map((pic) => {
            const picPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
            const data = {
                id: pic.id,
                title: pic.title,
                path: picPath,
            };
            return data;
        });
        const meta = {
            page: images.photos.page,
            pages: images.photos.pages,
            size: images.photos.perpage,
            total: images.photos.total,
        };

        const pictures = await Promise.all(arrayPictures);
        // return success response
        return response.success(res, errMessage("get images").success, meta, pictures);
    } catch (err) {
        // return err response
        return response.severError(res, errMessage().somethingWentWrong, {}, {});
    }
};
export {
    getImages,
};
