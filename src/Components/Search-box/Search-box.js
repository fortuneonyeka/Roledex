import { Component } from "react";

class Searchbox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <div>
        <input
          type="search"
          placeholder={placeholder}
          className={className}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default Searchbox;
