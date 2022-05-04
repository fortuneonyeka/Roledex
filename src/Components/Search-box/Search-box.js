import { Component } from "react";


class Searchbox extends Component {
  render(){
    const {searchMonsters} = this.props
    const {placeholder} = this.props
    return(
      <div>
        <input
          type="search"
          placeholder={placeholder}
          className="search-box"
          onChange={searchMonsters}
        />
      </div>
    )
  }
}


export default Searchbox