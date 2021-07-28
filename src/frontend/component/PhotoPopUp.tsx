import React from "react";
import {update_selected_photo, remove_selected_photo} from "../Actions";
import {connect} from "react-redux";

export interface PhotoInfo {
    name: string;
    image: string;
    width: number;
    height: number;
    ratio: number;
}

export interface PhotosProps {
    photo: PhotoInfo;
    update_selected_photo: any;
    remove_selected_photo: any;
}

class _PhotoPopUp extends React.Component<PhotosProps, {}>{
    closeButton = React.createRef<HTMLAnchorElement>();

    render() {
        return (
            <div><div className="row pop-up">
                    <div className="box small-6 large-centered" onClick={() => this.props.remove_selected_photo()}>
                        <div className="pop_child">
                            <a ref={this.closeButton} className="close-button">&#10006;</a>
                            <img className={"photo_large"} key={this.props.photo.image} src={"photos/" + this.props.photo.image}/>
                        </div>
                    </div>
                </div>
            </div>)
    }

    componentDidMount() {
        this.closeButton.current!.addEventListener("click", () => this.props.remove_selected_photo());
    }

}

const mapStateToProps = (state: any) => {
    return {photo: state.photo }
};

export const PhotoPopUp = connect(mapStateToProps, {update_selected_photo, remove_selected_photo })(_PhotoPopUp);