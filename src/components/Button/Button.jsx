import  { Component } from 'react'
import css from "../../styles.module.css";

export default class Button extends Component {
  render() {
    return (
      <button className={css.Button} type="submit">Load more</button>

    )
  }
}
