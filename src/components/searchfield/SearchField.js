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
  handleChange = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="searchfield-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchterm}
            onChange={this.handleChange}
          />
          <input type="submit" name="" id="" />
        </form>
      </div>
    );
  }
}

export default SearchField;
