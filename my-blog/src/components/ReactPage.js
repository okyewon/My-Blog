import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

function ReactPage() {
  // const [docs, setDocs] = useState([]);
  const [number, setNumber] = useState(0);

  async function fetcher() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(result.data);
    return result.data;
  }
  const { data: docs, error } = useSWR("posts", fetcher);

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     // const result = await res.json();
  //     console.log(result);
  //     return result.data;
  //   }

  //   fetchData().then((res) => {
  //     setDocs(res);
  //   });
  // }, []);
  if (error) return <div>failed to load</div>;
  if (!docs) return <div>loading...</div>;

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
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
