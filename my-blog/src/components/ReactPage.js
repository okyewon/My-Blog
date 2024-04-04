import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function ReactPage() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      return result;
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
