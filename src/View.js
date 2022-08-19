import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const View = () => {
  const [view, setView] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5500/user/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((d) => {
        setView(d);
        console.log(d);
      });
  }, [id]);
  return (
    <div>
      <p>{view.name}</p>
      <p>{view.email}</p>
      <p>{view.age}</p>
      <Link to="/">Go To Home</Link>
    </div>
  );
};

export default View;
