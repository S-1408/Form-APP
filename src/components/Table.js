import React, { useState } from "react";

const Table = ({ tableData, setTableData }) => {
  const removeRow = (i) => {
    tableData.splice(i, 1);
    setTableData(tableData);
    setTableData(tableData.filter((el) => el.i !== i));
  };

  const commonStyle = {
    backgroundColor: "#90DAF6",
    color: "white",
    fontWeight: "bold",
    border: "none",
  };
  return (
    <table className='table table-borderless'>
      <thead style={commonStyle}>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Gender</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((el, i) => {
          return (
            <tr key={i}>
              <td>{el.name}</td>
              <td>{el.phone}</td>
              <td>{el.gender}</td>

              <td>
                <button style={commonStyle} onClick={() => removeRow(i)}>
                  x
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
