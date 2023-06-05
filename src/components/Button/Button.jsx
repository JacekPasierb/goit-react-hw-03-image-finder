import  { Component } from 'react'
import css from "../../styles.module.css";
import PropTypes from 'prop-types';

export default class Button extends Component {

  render() {
    const { onClick } = this.props;
    return (
      <button className={css.Button} type="submit" onClick={onClick}>Load more</button>

    )
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}