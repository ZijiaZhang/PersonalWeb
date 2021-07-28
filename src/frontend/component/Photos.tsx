import React from "react";
import {connect} from "react-redux";
import {get_all_photos, remove_selected_photo, update_photos_size, update_selected_photo} from "../Actions"
import {PhotoPopUp} from "./PhotoPopUp";



export interface PhotoInfo {
    name: string;
    image: string;
    width: number;
    height: number;
    ratio: number;
}

export interface PhotosProps {
    photos: PhotoInfo[];
    get_all_photos: () => any;
    update_photos_size: () => any;
    update_selected_photo: (photo: PhotoInfo) => any;
    remove_selected_photo: ()=> any;
    photo: PhotoInfo;
}

class _Photos extends React.Component<PhotosProps, {}>{
    blur = React.createRef<HTMLDivElement>();

    render() {
       return (<section id="photos">
           <div ref={this.blur} id="overlay" className="cover blur-in" onClick={() => this.props.remove_selected_photo()}/>
           <div className="component-wrapper">
               <div className="project-outer">
                   <div style={ {height: "100px", width: "100%", padding: "0px"}}>
                   </div>

                   <h1 className="sectionTitle">
                       Photos
                   </h1>

                   <div style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
                       {this.props.photos.length >0? this.props.photos.map( (info) => {
                           //console.log(info.image);
                           return <img className={"photo"} key={info.image} src={"photos_tiny/" + info.image} width={info.width}
                                       height={info.height} onClick={()=>{console.log("123"); this.props.update_selected_photo(info)}}/>
                       }): (<div className="loading">Loading&#8230;</div>)}
                   </div>
                   {this.props.photo.width != 0 ? <PhotoPopUp/>: ""}
               </div>
           </div>
       </section>)
   }

    componentDidMount(): void {
        this.props.get_all_photos();
        window.addEventListener('resize', this.props.get_all_photos)
   }

    componentDidUpdate(prevProps: Readonly<PhotosProps>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.photo.width != 0) {
            this.blur.current!.classList.add("show");
        } else {
            this.blur.current!.classList.remove("show");
        }
    }

}

const mapStateToProps = (state: any) => {
    return {photos: state.photos, photo: state.photo }
};

export const Photos = connect(mapStateToProps, {get_all_photos, update_photos_size, update_selected_photo, remove_selected_photo})(_Photos);
