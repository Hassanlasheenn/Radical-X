import React, { createContext, useState } from 'react';


export const TickContext = createContext(null);

export const TickProvider = props => {
    const [activeCateg, setActiveCateg] = useState(false);

  return (
    <TickContext.Provider 
        value={
            {   activeCateg, setActiveCateg
            }}>
        {props.children}
    </TickContext.Provider>
  )
}
