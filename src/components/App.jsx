import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import css from "../styles.module.css";

import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { fetchImages } from "./API/fetchImage";

export default class App extends Component {
  state = {
    images: [],
    isLoad: false,
    page: 1,
    wordkey: "",
  };
  fetchImage = async (wordkey) => {
    this.setState({ isLoad: true });
    const response = await fetchImages(wordkey);
    this.setState({ images: response, isLoad: false, page: 1 ,wordkey: wordkey});
  };
  loadMore = async () => {//zapisalem przy fetchu wordkey do state i teraz przy load mam go w state
    
const response = await fetchImages()
  }
  render() {
    const { images, isLoad } = this.state;
    return (
      <div className={css.box}>
        <Searchbar fetchImage={this.fetchImage} />
        {isLoad && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}

       { images.length>=12 && <Button onClick={this.loadMore} />}
        <Modal />
      </div>
    );
  }
}
