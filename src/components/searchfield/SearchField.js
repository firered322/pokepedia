import React from "react";
import "./SearchField.css";

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {
      searchterm: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchterm: e.target.value });
  };

  render() {
    return (
      <div className="searchfield-container">
        <form className="input-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search Pokémons"
            value={this.state.searchterm}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchField;
