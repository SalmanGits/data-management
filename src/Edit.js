import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const Edit = ({ fetchData }) => {
  const [view, setView] = useState({
    name: "",
    email: "",
    age: "",
  });
  const nav = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5500/user/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((d) => {
        setView(d);
      });
  }, [id]);
  const handleChange = (e) => {
    setView({
      ...view,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5500/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(view),
    })
      .then((data) => {
        return data.json();
      })
      .then((d) => {
        nav("/");
        fetchData();
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={"" || view.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={"" || view.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        value={"" || view.age}
        name="age"
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default Edit;
