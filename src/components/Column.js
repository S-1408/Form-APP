import React from "react";

export default function Column() {
  const items = [];
  return (
    <>
      {/* // <React.Fragment> */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>UserName</td>
      <td>Skills</td>
      {/* </React.Fragment> */}
    </>
  );
}
