import { Routes, Route } from 'react-router-dom';
import './App.css';
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
import BriefContent from './Components/InternshipGuide/GuideContent/Overview/BriefContent';
import ScheduleContent from './Components/InternshipGuide/GuideContent/Schedule/ScheduleContent';
import ResourcesContent from './Components/InternshipGuide/GuideContent/Resources/ResourcesContent';
import Surveys from './Pages/Surveys';
import Survey1 from './Components/Surveys/SurveyQuestions/Survey1';
import Survey2 from './Components/Surveys/SurveyQuestions/Survey2';
import Settings from './Pages/Settings';
import BasicSet from './Components/Settings/SettingsForm/BasicSet';
import HeroImage from './Components/Settings/SettingsForm/HeroImage';
import Done from './Pages/Done';


const App = () => {
  
  return (
    <div className="App">
    <TickProvider>
      <Routes>
        <Route exact path='/' element={<Home />}/>
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
          <Route exact path='overview' element={<BriefContent /> } />
          <Route exact path='schedule' element={<ScheduleContent /> } />
          <Route exact path='resources' element={<ResourcesContent /> } />
        </Route>

        <Route exact path='surveys' element={<Surveys />}>
          <Route exact path='1' element={<Survey1 />} />
          <Route exact path='2' element={<Survey2 />} />
        </Route>

        <Route exact path='settings' element={<Settings />}>
          <Route exact path='basic-settings' element={<BasicSet />} />
          <Route exact path='hero-image' element={<HeroImage />} />
        </Route>

        <Route exact path='done' element={<Done />} /> 
        {/* 404 page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TickProvider>

    </div>
  );
}

export default App;
