import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReactDocPage() {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.docId}`
      );
      const result = await res.json();
      return result;
    }

    fetchData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <div>ReactDocPage ##{params.docId}</div>
      <h3>{data.title}</h3>
      <div>{data.body}</div>
    </>
  );
}

export default ReactDocPage;
