import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CharacterContext = createContext({
  characters: [],
});

export const CharacterContextProvider = (props) => {
  const [characters, setCharacters] = useState([]);

  const url = 'https://www.breakingbadapi.com/api/characters';

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(url);
        setCharacters(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
