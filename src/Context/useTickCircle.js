import React, { createContext, useState } from 'react';


export const TickContext = createContext(null);

export const TickProvider = props => {
    const [active, setActive] = useState({  });

    const setTick = (name, activity) => {
      setActive(prevActive => {return {...prevActive, [name]: activity}})
    }

  return (
    <TickContext.Provider 
        value={{ 
          active, setTick
        }}
    >
        {props.children}
    </TickContext.Provider>
  )
}
