import {PhotoInfo} from "../component/Photos";

export interface RowInfo {
    photo: PhotoInfo[];
    width: number;
}

function SeedRandom(state1: any,state2: any){
    var mod1=4294967087
    var mul1=65539
    var mod2=4294965887
    var mul2=65537
    if(typeof state1!="number"){
        state1=+new Date()
    }
    if(typeof state2!="number"){
        state2=state1
    }
    state1=state1%(mod1-1)+1
    state2=state2%(mod2-1)+1
    function random(limit: any): any{
        state1=(state1*mul1)%mod1
        state2=(state2*mul2)%mod2
        if(state1<limit && state2<limit && state1<mod1%limit && state2<mod2%limit){
            return random(limit)
        }
        return (state1+state2)%limit
    }
    return random
}

function shuffle(array: any, seed: number) {
    var currentIndex = array.length,  randomIndex;
    var generator = SeedRandom(seed, seed);
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = generator(currentIndex) ;
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function format_photos(photos: PhotoInfo[]) {
    photos = photos.sort((a: PhotoInfo, b: PhotoInfo)=>b.ratio - a.ratio);
    let screen_width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 0.8;
    console.log(screen_width);
    let target_item_count = screen_width / 300;
    let target_row_count = Math.floor(photos.length / target_item_count);
    let photo_rows: RowInfo[] = [];
    for (let i =0; i < target_row_count; i++){
        photo_rows.push({photo: [], width: 0});
    }
    for(let photo of photos){
        let target_row = photo_rows[0];
        for (let row of photo_rows){
            if(row.width < target_row.width){
                target_row = row;
            }
        }
        target_row.photo.push(photo);
        target_row.width += photo.ratio;
    }
    let result: PhotoInfo[] = [];
    let count = 0;
    for(let row of photo_rows){
        count ++;
        let row_ratio = (screen_width- 10 * (row.photo.length)) / row.width;
        row.photo = shuffle(row.photo, count);
        console.log("len " + row.photo.length);
        console.log(row.width);
        for (let photo of row.photo){
            photo.height = row_ratio;
            photo.width = row_ratio * photo.ratio;
            console.log(photo.ratio);
            result.push(photo);
        }
    }
    return result;
}

function getMeta(url: string) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject();
        img.src = url;
    });
}

export const get_all_photos = () => {
    return function(dispatch: any) {
        fetch('/api/images').then(
            (data) => {
                data.json().then(async (value:any)=>{
                    let photos: PhotoInfo[] = [];
                    let promises = value.map((image: string) => getMeta("photos_tiny/" + image));
                    let images: any[] = await Promise.all(promises);
                    for (let img of images){
                        photos.push({name: img.src, image: img.src, width: img.naturalWidth, height: img.naturalHeight, ratio: img.naturalWidth/img.naturalHeight});
                    }
                    photos = format_photos(photos);


                    dispatch({type: "receive_images",
                        message:
                        photos})
                }).catch(() => {});

            }
        ).catch(() => {});
    }
};

export const update_photos_size = () => {
        return function(dispatch: any) {
            dispatch({
                type: "receive_images",
                message: null
            });
        }
};

