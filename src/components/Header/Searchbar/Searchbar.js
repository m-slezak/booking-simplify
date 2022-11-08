import React, { useState } from "react";

function Searchbar(props) {
  const [term, setTerm] = useState("");

  const search = () => {
    props.onSearch(term);
  };
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="flex">
      <div>
        <input
          onKeyDown={onKeyDownHandler}
          onChange={(e) => setTerm(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Szukaj..."
          value={term}
        />
      </div>
      <div className="">
        <button
          onClick={search}
          className="bg-teal-800 px-3 py-2 text-white rounded hover:bg-teal-600 mx-2   "
        >
          Szukaj
        </button>
      </div>
    </div>
  );
}
export default Searchbar;
