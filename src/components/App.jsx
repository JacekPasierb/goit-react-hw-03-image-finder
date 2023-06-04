import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default class App extends Component {
  fetchImage = (wordkey) => {
    console.log('poka',wordkey);
  }
  render() {
    return (
      <div>
        <Searchbar fetchImage={this.fetchImage} />
        <ImageGallery />
        <ImageGalleryItem />
        {/* <Loader /> */}
        {/* <Button /> */}
        <Modal />
      </div>
    );
  }
}
