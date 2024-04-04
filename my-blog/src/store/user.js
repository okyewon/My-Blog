import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserStore(props) {
  const [job, setJob] = useState("FE-developer");
  const user = {
    name: "ogi",
    job: "FE-developer",
    changeJob: (updatedJob) => setJob(updatedJob),
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export default UserStore;
