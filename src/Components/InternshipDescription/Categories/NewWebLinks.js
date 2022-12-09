import React, { useContext, useState } from 'react';

// css & icons imports 
import '../../../Styles/WebLinks.css';
import '../../../Styles/CategoryContent.css';
import closeIcon from '../../../images/close.svg';
import addLinkIcon from '../../../images/add-square-newInternship.svg';
import greenTick from '../../../images/icons8-ok.svg';
// import linkWeb from '../../../images/link-internship.svg';
import { TickContext } from '../../../Context/useTickCircle';

const NewWebLinks = () => {

  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);

  const { setTick } = useContext(TickContext);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleAdd = () => {
    if(url.length === 0) return 'disabled'
    const newLink = links.concat({
      name: url,
    });
    setLinks(newLink);
    setUrl('');
    setTick("Web Links & Resources", true);
    setTick("Internship Description", true);
    setTick("Continue to Guide", true);
  }

  const handleChange = (e) => {
    e.preventDefault();
    if(!isValidEmail(e.target.value)) {
      setError("Invalid Email");
    } else {
      setError(null);
    }
    setUrl(e.target.value);
  }

  const handlePress = (e) => {
    if(e.key === 'Enter') {
      handleAdd();
    }
  }

  const handleRemove = (name) => {
    const linkRemove = links.filter((i) => i.name !== name);
    setError(null);

    setLinks(linkRemove);
    setTick("Web Links & Resources", false);
    setTick("Internship Description", false);
    setTick("Continue to Guide", false);
    
  }

  return (
    <div className='webLinkCont'>
        <span className='titleRecommended'>Recommended Roles</span>
        <div className='searchFieldWeb'>
            <input 
              placeholder='Add URL'
              type="url"
              id='url'
              onKeyDown={handlePress}
              onChange={handleChange}
              value={url}
              required
            />
        {error ? 
          <span className='invalid-email'>{error}</span> 
          : 
          <img className='green-tick' src={greenTick} alt ='' /> 
        }
            <div className='linksPaste'>
              <div disabled className='addUrlCont'>
                  <img src={addLinkIcon} alt='' />
                  <button type='button' onClick={handleAdd} className='AddUrlText'>Add URL</button>
              </div>
              <div className='linksCont'>
                  {links.map((link) => {
                    return (
                      <div className='linkContWeb' key={link.id}>
                        <span className='linkText'>{link.name}</span>
                        <img src={closeIcon} alt='' type='button' onClick={() => handleRemove(link.name)} style={{ cursor: 'pointer' }} />
                      </div>
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
