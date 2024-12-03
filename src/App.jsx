import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home'
import { NationalActivities } from './components/pages/NationalActivities'
import { ActivitiesArea } from './components/pages/ActivitiesArea';
import { ActivitiesCurch } from './components/pages/ActivitiesCurch';
import { ListToilet } from './components/pages/routes/ListToilet';
import { Sectors } from './components/pages/routes/Sectors';
import { Sector1 } from './components/pages/routes/Sectors/ListCalendarInformative/Sector1';
import { Sector3 } from './components/pages/routes/Sectors/ListCalendarInformative/Sector3';
import { Sector4 } from './components/pages/routes/Sectors/ListCalendarInformative/Sector4';
import { Sector5 } from './components/pages/routes/Sectors/ListCalendarInformative/Sector5';
import { AltoSanIsidro } from './components/pages/routes/Sectors/ListCalendarInformative/AltoSanIsidro';



function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NationalActivities" element={<NationalActivities />} />
        <Route path="/ActivitiesArea" element={<ActivitiesArea />} />
        <Route path="/ActivitiesCurch" element={<ActivitiesCurch />} />
        <Route path="/ListToilet" element={<ListToilet/>} />
        <Route path="/Sectors" element={<Sectors/>} />
        <Route path="/Sector1" element={<Sector1/>} />
        <Route path="/Sector3" element={<Sector3/>} />
        <Route path="/Sector4" element={<Sector4/>} />
        <Route path="/Sector5" element={<Sector5/>} />
        <Route path="/AltoSanIsidro" element={<AltoSanIsidro/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
