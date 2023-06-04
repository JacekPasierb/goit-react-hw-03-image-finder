import { Component } from "react";
import css from "../../styles.module.css";

export default class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <li className={css.ImageGalleryItem} id={image.id}>
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    );
  }
}
