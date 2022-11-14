import React from 'react';
import '../Styles/WebLinks.css';

const NewWebLinks = () => {
  return (
    <div className='webLinkCont'>
        <span className='titleRecommended'>Recommended Roles</span>
        <div className='searchFieldWeb'>
            <div className='textFieldWeb'>
                <div className='WebLinkLogo' />
                <span className='placeholderUrl'>Add URL</span>
            </div>
            <div className='addUrlCont'>
                <div className='squareAddLink' />
                <span className='AddUrlText'>Add URL</span>
            </div>
        </div>
    </div>
  )
}

export default NewWebLinks;
