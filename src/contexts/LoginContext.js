import React, { useContext, createContext, useState } from 'react';

const LoginContext = createContext({
  isAuth: false,
  name: '',
  login: ()=>{},
  setName: ()=>{}
});

export const LoginContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState('')
    const loginHandler = () => {
        setIsAuthenticated(!isAuthenticated)
        
    }
    const nameHandler = (personName) =>{
      setName(personName)
    }
  

  return (
    <LoginContext.Provider value={{ login: loginHandler, setName: nameHandler, name: name, isAuth: isAuthenticated}}>
      {props.children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
