import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

let formElement = [{ key: "name" }, { key: "phone" }, { key: "gender" }];
const Form = ({ addNewRecord }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
  });
  const { name, phone, gender } = formData;
  //   const [register, handleSUbmit] = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    addNewRecord(formData);
    // alert("success");
    setFormData({ id: uuidv4(), name: "", phone: "", gender: "" });
  };
  const handleChange = (value, key) => {
    setFormData({
      ...formData,
      ...{ [key]: value },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5 style={{ marginRight: "225px" }}>Hello there!!</h5>
        <br />
        {formElement.map((element, key) => {
          return (
            <div className='form-group' key={key}>
              <input
                value={formData[element.key]}
                onChange={(e) => {
                  handleChange(e.target.value, element.key);
                }}
                placeholder={`Enter your ${element.key}`}
                type='text'
                required
                size='40'
              />
            </div>
          );
        })}

        <div className='form-group'>
          <div className='row'>
            <div
              className='col-md-8'
              style={{ textAlign: "center", marginLeft: "93px" }}>
              <button
                type='submit'
                class='btn btn-default btn-block  '
                style={{
                  backgroundColor: "#90DAF6",
                  color: "white",
                  fontWeight: "bold",
                }}>
                ADD USER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
