import { createContext } from "react";
const UserContext = createContext();

function AppContextProvider(props) {
  return (
    <UserContext.Provider value={'34'}>
        {props.children}
    </UserContext.Provider>
  );
}

export {AppContextProvider, UserContext};
