import { Component } from "react";
import css from "../../styles.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;

    return (
      <ul className={css.ImageGallery}>
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
        ))}
      </ul>
    );
  }
}
