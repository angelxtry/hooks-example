import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();
// firstName: "suho",
// lastName: "lee",
// suffix: 0,
// email: "abc@gmail.com",
// });

const LevelFive = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h5>{`${user.firstName} ${user.lastName} ${user.suffix}`}</h5>
      <button
        type="button"
        onClick={() => {
          const suffix = user.suffix + 1;
          setUser({ ...user, suffix });
        }}
      >
        Increment
      </button>
    </div>
  );
};

const LevelFour = () => {
  return (
    <div>
      <h3>Fourth level</h3>
      <LevelFive />
    </div>
  );
};

const LevelThree = () => {
  return (
    <div>
      <h3>Third level</h3>
      <LevelFour />
    </div>
  );
};

const LevelTwo = () => {
  return (
    <div>
      <h2>Second level</h2>
      <LevelThree />
    </div>
  );
};

const Context = () => {
  const userState = useState({
    firstName: "SUHO",
    lastName: "LEE",
    suffix: 1,
    email: "ABC@gmail.com",
  });
  return (
    <UserContext.Provider value={userState}>
      <h1>useContextExample - First level</h1>
      <LevelTwo />
    </UserContext.Provider>
  );
};

export default Context;
