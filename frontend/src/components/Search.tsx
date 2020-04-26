import React from "react";
import { ISearchProps } from "../interfaces/ISearchInterface";

const Search: React.FC<ISearchProps> = ({ searchQuery, setSearchQuery }) => {
  const updateSearchState = (e: any) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="input-group mb-2 mr-sm-2 search-form">
      <div className="input-group-prepend">
        <div className="input-group-text">?</div>
      </div>
      <input type="text" className="form-control search-input" placeholder="Search for Name, Pledge, Position" onChange={updateSearchState} value={searchQuery}/>
    </div>
  );
};

export default Search;
