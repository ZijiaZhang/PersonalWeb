import {combineReducers} from "redux";
import {PhotoInfo} from "../component/Photos";
import {format_photos} from "../Actions";

const update_photos = (photos: PhotoInfo[] =
                            [], action: any) => {
    if (action.type === "receive_images") {
        return action.message;
    }
    if (action.type === "resize"){
        photos = format_photos(photos);
    }
    return photos;
};

export default combineReducers({
    photos: update_photos,
});
