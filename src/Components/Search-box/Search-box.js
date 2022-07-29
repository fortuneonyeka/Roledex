import "./search-box.style.css"

const Searchbox = ({ onChangeHandler, placeholder, className }) => {

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


export default Searchbox;
