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

const update_selected_photos = (photo: PhotoInfo = {
    name: "",
    image: "",
    width: 0,
    height: 0,
    ratio: 0}, action: any) => {
    if (action.type === "selected_photo") {
        return action.message;
    }
    if (action.type === "remove_photo"){
        return {
            name: "",
            image: "",
            width: 0,
            height: 0,
            ratio: 0};
    }
    return photo;
};

export default combineReducers({
    photos: update_photos,
    photo: update_selected_photos
});
