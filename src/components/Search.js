import React, { useState } from "react";

const Search = ({ tableData, setTableData }) => {
  const [searchInput, setSearchInput] = useState("");

  const filterData = (e) => {
    setSearchInput(e);
    if (parseInt(e.length) > 0) {
      const filteredServices = tableData.filter(
        (temp) => temp.name.indexOf(e.toLowerCase()) !== -1
      );
      setTableData(filteredServices);
      console.log("filtered services", filteredServices);
    } else {
      setTableData(tableData);
    }
  };

  return (
    <div className='input-group'>
      <div className='form-outline'>
        <input
          id='search-input'
          type='search'
          id='form1'
          value={searchInput || ""}
          className='form-control'
          onChange={(e) => filterData(e.target.value)}
          size='60'
        />
      </div>
      <button
        id='search-button'
        type='button'
        style={{
          backgroundColor: "#90DAF6",
          color: "white",
          border: "none",
        }}>
        <i className='fa fa-search'></i>
      </button>
    </div>
  );
};
export default Search;
