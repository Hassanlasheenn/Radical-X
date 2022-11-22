import React, { createContext, useState } from 'react';


export const TickContext = createContext(null);

export const TickProvider = props => {
    const [activeCateg, setActiveCateg] = useState(false);
    const [activeLoc, setActiveLoc] = useState(false);
    const [activeDesc, setActiveDesc] = useState(false);
    const [activeBenefits, setActiveBenefits] = useState(false);
    const [activeVideo, setActiveVideo] = useState(false);
    const [activeMentor, setActiveMentor] = useState(false);
    const [activeRoles, setActiveRoles] = useState(false);
    const [activeLinks, setActiveLinks] = useState(false);

    const [activeColor, setActiveColor] = useState(false);
    const [activePage, setActivePage] =  useState(false);

  return (
    <TickContext.Provider 
        value={
            {   activeCateg, setActiveCateg, 
                activeLoc, setActiveLoc, 
                activeDesc, setActiveDesc, 
                activeBenefits, setActiveBenefits,
                activeVideo, setActiveVideo,
                activeMentor, setActiveMentor,
                activeRoles, setActiveRoles,
                activeLinks, setActiveLinks,
                activeColor, setActiveColor,
                activePage, setActivePage
            }}>
        {props.children}
    </TickContext.Provider>
  )
}
