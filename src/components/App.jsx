import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { fetchImages } from "./API/fetchImage";

export default class App extends Component {
  fetchImage = async (wordkey) => {
    console.log('poka', wordkey);
    const response = await fetchImages(wordkey);
    console.log('res',response);
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
