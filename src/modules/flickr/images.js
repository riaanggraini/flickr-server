import { get } from "../../helpers/axios";

// get images
const getImages = async (page, size, search) => {
    let searchable = "";
    let method = "flickr.photos.getRecent";

    // condition to decide url of flickr
    if (search) {
        searchable = `&tags=${search}`;
        method = "flickr.photos.search";
    }
    // define flickr url
    const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${process.env.api_key}&format=json&per_page=${size}&page=${page}&nojsoncallback=1${searchable}`;

    // fetch the url
    const images = await get(url);

    // returned json data
    return images.data;
};
export {
    getImages,
};
