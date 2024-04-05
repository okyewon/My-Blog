import React, { createContext, useReducer, useState } from "react";

export const UserContext = createContext();

const initialUser = {
  name: "ogi",
  job: "FE-developer",
};
const userReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      return { ...state, job: action.text };
      break;

    default:
      break;
  }
};

function UserStore(props) {
  // const [job, setJob] = useState("FE-developer");
  const [user, dispatch] = useReducer(userReducer, initialUser);

  // const user = {
  // name: "ogi",
  // job: "FE-developer",
  // changeJob: (updatedJob) => setJob(updatedJob),
  // };

  console.log(user);

  return (
    <UserContext.Provider value={dispatch}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;
