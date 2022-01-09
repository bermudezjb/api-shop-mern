import React, { useState } from "react";

const Search = ({ setSearch }) => {
  //creating state

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  // handle submit function
  const handleSubmit = (e) => {
    // here is used the button submit
    e.preventDefault(); //send info to parent componet "main"
    // validation
    if (inputValue.trim() === "") {
      setError(true);
      return;
    }
    //here it return to the initial state "false"
    setError(false);
    //here it sends the value
    setSearch(inputValue);
    setInputValue("");
  };

  return (
    <section className="d-flex flex-column align-items-center mb-4  ">
      <form className="d-flex col-md-8 " onSubmit={handleSubmit}>
        <input
          className="form-control me-sm-2 col-md-8"
          type="text"
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)} // here take all the info that the user is tippyng
          value={inputValue}
        />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      {error ? <p className="text-danger mt-3">debes poner un movil</p> : null}
    </section>
  );
};

export default Search;
