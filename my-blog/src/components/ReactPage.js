import React from "react";
import { Link, Outlet } from "react-router-dom";

function ReactPage() {
  const docs = [
    {
      id: 1,
      title: "React start",
      date: "04/03/2024",
    },
    {
      id: 2,
      title: "Without CRA",
      date: "12/03/2024",
    },
    {
      id: 3,
      title: "useMemo & useCallback",
      date: "21/03/2024",
    },
    {
      id: 4,
      title: "React with Prettier",
      date: "31/03/2024",
    },
    {
      id: 5,
      title: "React setState(), useEffect()",
      date: "01/04/2024",
    },
  ];
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
