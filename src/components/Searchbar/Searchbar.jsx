import { Component } from "react";

import css from "../../styles.module.css";

export default class Searchbar extends Component {
  state = {
    wordKey: "",
  };
  changeWordKey = (e) => {
    this.setState({ wordKey: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const wordKey = this.state.wordKey;
    this.props.fetchImage(wordKey);
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.changeWordKey}
            value={this.state.wordKey}
          />
        </form>
      </header>
    );
  }
}
