import { useState } from "react";
import List from "./List.js";

const Post = ({ datas, fetchData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:5500/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fetchData();
        setForm({
          name: "",
          email: "",
          age: "",
        });
      });
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={form.age}
          placeholder="age"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <List datas={datas} fetchData={fetchData} />
    </>
  );
};

export default Post;
