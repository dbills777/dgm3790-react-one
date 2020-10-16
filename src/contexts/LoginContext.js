import React, { useContext, createContext, useState } from 'react';

const LoginContext = createContext({
  isAuth: false,
  login: ()=>{}
});

export const LoginContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const loginHandler = () => {
        setIsAuthenticated(true)
    }
  

  return (
    <LoginContext.Provider value={{ login: loginHandler, isAuth: isAuthenticated }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
