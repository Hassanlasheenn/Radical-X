import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NewInternship from './Pages/NewInternship';
import CategoryContent from './Components/CategoryContent';
import DescContent from './Components/DescContent';
import LocationContent from './Components/LocationContent';
import BenefitsContent from './Components/BenefitsContent';
import NewIntroVideo from './Components/NewIntroVideo';
import MentorDetails from './Components/NewMentorDetails';
import RecommendedRoles from './Components/RecommendedRoles';
import Links from './Components/NewWebLinks';
import NotFound from './Pages/NotFound';
import { TickProvider } from './Context/useTickCircle';


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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TickProvider>

    </div>
  );
}

export default App;
