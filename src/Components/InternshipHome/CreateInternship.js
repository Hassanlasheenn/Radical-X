import React from 'react';
import Button from '../Buttons/Button_1';
import { useNavigate } from 'react-router-dom';

// css & icons imports 
import '../../Styles/CreateInternship.css';
import addIcon from '../../images/add-square.svg';

function CreateIntership() {
  const navigate = useNavigate();

  const handleNewInternship = () => {
    navigate("/new-internships")
  }
  
  return (
    <div className='createContCreate'>
      <h4 className='internshipTitleCreate'>Internships</h4>
      <Button icon={addIcon} onClick={handleNewInternship}>
          Create New Internship
      </Button>
    </div>
  )
}

export default CreateIntership;
