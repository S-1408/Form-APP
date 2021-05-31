import React, { useState } from "react";
import Form from "./Form";
import "./Component.css";
import Search from "./Search";
import Table from "./Table";
const Common = () => {
  const [tableData, setTableData] = useState([]);

  const addNewRecord = (data) => {
    setTableData([...tableData, data]);
  };
  return (
    <div>
      <div className='container' style={{ marginTop: "150px" }}>
        <div className='row'>
          <div className='col-md-6' style={{ textAlign: "center" }}>
            <Form addNewRecord={addNewRecord} />
          </div>
          <div className='col-md-6'>
            <Search tableData={tableData} setTableData={setTableData} />
            <br />
            <Table tableData={tableData} setTableData={setTableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
