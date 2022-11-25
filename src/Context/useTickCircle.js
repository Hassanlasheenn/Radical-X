import React, { createContext, useState } from 'react';


export const TickContext = createContext(null);

export const TickProvider = props => {
    const [active, setActive] = useState(false);

  return (
    <TickContext.Provider 
        value={ { active, setActive }}
    >
        {props.children}
    </TickContext.Provider>
  )
}
