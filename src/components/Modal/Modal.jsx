import  { Component } from 'react'
import css from "../../styles.module.css";

export default class Modal extends Component {
  render() {
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
