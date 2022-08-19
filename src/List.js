import React from "react";
import { Link } from "react-router-dom";

const List = ({ datas, fetchData }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:5500/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      fetchData();
    });
  };
  return (
    datas &&
    datas.map((data) => {
      return (
        <div className="parent" key={data._id}>
          <div className="main">
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>{data.age}</p>
            <div className="links">
              <Link to={`user/${data._id}`}>View</Link>
              <button onClick={() => handleDelete(data._id)}>Delete</button>
              <Link to={`edit/${data._id}`}>Edit</Link>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default List;
