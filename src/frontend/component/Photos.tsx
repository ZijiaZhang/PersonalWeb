import React from "react";
import {connect} from "react-redux";
import {get_all_photos, update_photos_size} from "../Actions"



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
}

class _Photos extends React.Component<PhotosProps, {}>{
   render() {
       return (<section id="photos">
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
                           return <img className={"photo"} key={info.image} src={info.image} width={info.width} height={info.height}/>
                       }): (<div className="loading">Loading&#8230;</div>)}
                   </div>
               </div>
           </div>
       </section>)
   }

    componentDidMount(): void {
        this.props.get_all_photos();
        window.addEventListener('resize', this.props.get_all_photos)
   }


}

const mapStateToProps = (state: any) => {
    return {photos: state.photos }
};

export const Photos = connect(mapStateToProps, {get_all_photos, update_photos_size})(_Photos);
