import { useState, useEffect } from "react";
import View from "./View.js";
import Post from "./Post.js";
import Edit from "./Edit.js";
import { Routes, Route } from "react-router-dom";

// import { useParams } from "react-router-dom";

function App() {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5500");
    const data = await res.json();
    setDatas(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Post datas={datas} fetchData={fetchData} />}
        />

        <Route exact path="user/:id" element={<View />} />
        <Route exact path="edit/:id" element={<Edit fetchData={fetchData} />} />
      </Routes>
    </>
  );
}

export default App;
