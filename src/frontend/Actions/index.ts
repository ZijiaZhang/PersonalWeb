import {PhotoInfo} from "../component/Photos";

export interface RowInfo {
    photo: PhotoInfo[];
    width: number;
}

const fullNameMobileRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const prefixMobileRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bca|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|htumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|di(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function ua() {
    return navigator.userAgent || navigator.vendor ||  '';
}
function mobile() {
    const a = ua();
    return !!(fullNameMobileRe.test(a) || prefixMobileRe.test(a.substr(0, 4)));
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
    let target_item_count = Math.max(screen_width / 300,3);
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
        let row_ratio = (screen_width- (mobile()? 4 :10) * (row.photo.length)) / row.width;
        row.photo = shuffle(row.photo, count);

        for (let photo of row.photo){
            photo.height = row_ratio;
            photo.width = row_ratio * photo.ratio;
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

