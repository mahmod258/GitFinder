import { useState } from "react";

function Search({ func }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    func(e.target.firstChild.value);
  };

  return (
    <div className="search d-flex aign-items-center justify-content-center">
      <img
        src="https://gitfinderapp.herokuapp.com/images/svg/icon-search.svg"
        alt=""
        style={{
          objectFit: "contain",
        }}
      />
      <form className="w-100" onSubmit={handleSubmit}>
        <input
          className="search-on-github"
          type="text"
          placeholder="Search Github Username"
        />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}
export default Search;
