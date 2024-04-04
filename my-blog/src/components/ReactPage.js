import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function ReactPage() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // const result = await res.json();
      console.log(result);
      return result.data;
    }

    fetchData().then((res) => {
      setDocs(res);
    });
  }, []);

  return (
    <div>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: "block", margin: "1rem 0" }}
        >
          {doc.title}
        </Link>
      ))}
    </div>
  );
}

export default ReactPage;
