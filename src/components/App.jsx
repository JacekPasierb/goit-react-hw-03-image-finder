import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { fetchImages } from "./API/fetchImage";

export default class App extends Component {
  state = {
    images: [],
  };
  fetchImage = async (wordkey) => {
    const response = await fetchImages(wordkey);
    this.setState({ images: response });
  };
  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar fetchImage={this.fetchImage} />
        <ImageGallery images={images} />

        {/* <Loader /> */}
        {/* <Button /> */}
        <Modal />
      </div>
    );
  }
}
