import { Component } from "react";
import css from "../../styles.module.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
  render() {
    const { src, alt, close } = this.props;
    return (
      <div className={css.Overlay} onClick={close}>
        <div className={css.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
