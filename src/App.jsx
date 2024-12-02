import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home'
import { NationalActivities } from './components/pages/NationalActivities'
import { ActivitiesArea } from './components/pages/ActivitiesArea';
import { ActivitiesCurch } from './components/pages/ActivitiesCurch';
import { LeadersCalendar } from './components/pages/routes/LeadersCalendar';
import { ListToilet } from './components/pages/routes/ListToilet';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NationalActivities" element={<NationalActivities />} />
        <Route path="/ActivitiesArea" element={<ActivitiesArea />} />
        <Route path="/ActivitiesCurch" element={<ActivitiesCurch />} />
        <Route path="/LeadersCalendar" element={<LeadersCalendar/>} />
        <Route path="/ListToilet" element={<ListToilet/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
