import { Routes, Route } from 'react-router-dom';
// pages & components imports
import Home from './Pages/Home';
import NewInternship from './Pages/NewInternship';
import CategoryContent from './Components/InternshipDescription/Categories/CategoryContent';
import DescContent from './Components/InternshipDescription/Categories/DescContent';
import LocationContent from './Components/InternshipDescription/Categories/LocationContent';
import BenefitsContent from './Components/InternshipDescription/Categories/BenefitsContent';
import NewIntroVideo from './Components/InternshipDescription/Categories/NewIntroVideo';
import MentorDetails from './Components/InternshipDescription/Categories/NewMentorDetails';
import RecommendedRoles from './Components/InternshipDescription/Categories/RecommendedRoles';
import Links from './Components/InternshipDescription/Categories/NewWebLinks';
import NotFound from './Pages/NotFound';
import { TickProvider } from './Context/useTickCircle';
import InternshipGuide from './Pages/InternshipGuide';
import Surveys from './Pages/Surveys';
import Settings from './Pages/Settings';
import Done from './Pages/Done';
import SettingForm from './Components/Settings/SettingForm';
import SurveyContent from './Components/Surveys/SurveyQuestions/SurveyContent';
import GuideContent from './Components/InternshipGuide/GuideContent';
import Sidebar from './Components/Sidebar/Sidebar';

// css & icon imports 
import './App.css';
import uploadLogo from './images/document-upload.svg';



const App = () => {
  
  return (
    <div className="App">
      <TickProvider>
        <Routes>

            <Route exact path='/' element={<Sidebar />}>
              <Route exact path='home' element={<Home />} />
            </Route>

            <Route exact path='internships' element={<NewInternship />}>
              <Route exact path='category' element={<CategoryContent />} />
              <Route exact path='description' element={<DescContent />} />
              <Route exact path='location' element={<LocationContent />} />
              <Route exact path='benefits' element={<BenefitsContent />} />
              <Route exact path='intro-video' element={<NewIntroVideo />} />
              <Route exact path='mentor-details' element={<MentorDetails />} />
              <Route exact path='recommended-roles' element={<RecommendedRoles />} />
              <Route exact path='links' element={<Links />} />
            </Route>

            <Route exact path='internship-guide' element={<InternshipGuide />}>
              <Route exact path='overview' element={<GuideContent title1='Brief' title2='Requirements' title3='Milestones' fieldText='Drag n drop to upload your video' icon={uploadLogo} /> } />
              <Route exact path='schedule' element={<GuideContent title1='Duration' title2='Timeline' title3='Deliverables' fieldText='Drag n drop to upload your video' icon={uploadLogo} /> } />
              <Route exact path='resources' element={<GuideContent title1='Curated Resources' title2='Events' fieldText='Drag n drop to upload your video' icon={uploadLogo} /> } />
            </Route>

            <Route exact path='surveys' element={<Surveys />}>
              <Route exact path='1' element={<SurveyContent title='Survey 1' />} />
              <Route exact path='2' element={<SurveyContent title='Survey 2' />} />
            </Route>

            <Route exact path='settings' element={<Settings />}>
              <Route exact path='basic-settings' element={<SettingForm name1={'Private Internship'} name2={'Hidden Internship'} name3={'Disable Text Copying'} />} />
              <Route exact path='hero-image' element={<SettingForm name1={'Private Internship'} name2={'Hidden Internship'} name3={'Disable Text Copying'} />} />
            </Route>

          {/* submitted internship page */}
          <Route exact path='done' element={<Done />} /> 

          {/* 404 error page */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </TickProvider>
    </div>
  );
}

export default App;
