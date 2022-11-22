import React, { useContext, useState } from 'react';
import { TickContext } from '../../../Context/useTickCircle';
import '../../../Styles/WebLinks.css';
import '../../../Styles/CategoryContent.css';

const NewWebLinks = () => {

  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const { setActiveLinks, setActivePage, setActiveColor } = useContext(TickContext);

  const handleAdd = () => {
    if(url.length === 0) return 'disabled' && setActiveLinks(false);
    const newLink = links.concat({
      name: url,
    });
    setActiveLinks(true);
    setLinks(newLink);
    setUrl('');
  }

  const handleChange = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  }

  const handlePress = (e) => {
    if(e.key === 'Enter') {
      setActiveLinks(true);
      setActivePage(true);
      setActiveColor(true);
      handleAdd();
    }
  }

  const handleRemove = (name) => {
    const linkRemove = links.filter((i) => i.name !== name);

    setLinks(linkRemove);
    setActiveLinks(false);
    setActivePage(false);
    setActiveColor(false);
  }

  return (
    <div className='webLinkCont'>
        <span className='titleRecommended'>Recommended Roles</span>
        <div className='searchFieldWeb'>
            <div className='textFieldWeb'>
                <div className='WebLinkLogo' />
                <input 
                  className='placeholderUrl'
                  placeholder='Add URL'
                  type="text"
                  onKeyDown={handlePress}
                  onChange={handleChange}
                  value={url}
                />
            </div>
            <div className='linksPaste'>
              <div className='addUrlCont'>
                  <div className='squareAddLink' />
                  <button type='button' onClick={handleAdd} className='AddUrlText'>Add URL </button>
              </div>

              <div className='linksCont'>
                    {links.map((link) => {
                      return (
                        <>
                          <div className='linkContWeb' key={link.id}>
                            <span className='linkText'>{link.name}</span>
                            <button type='button' onClick={() => handleRemove(link.name)} className='closeBtnCateg' />
                          </div>
                        </>
                      )
                    })

                    }
              </div>
            </div>

            

        </div>
    </div>
  )
}

export default NewWebLinks;
