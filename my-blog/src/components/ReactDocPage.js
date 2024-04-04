import React from "react";
import { useParams } from "react-router-dom";

function ReactDocPage() {
  const params = useParams();

  return <div>ReactDocPage ##{params.docId}</div>;
}

export default ReactDocPage;
