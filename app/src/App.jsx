import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import Sidebar from './sections/Sidebar';
import InfoPendonor from './sections/InfoPendonor';
import AnalisisKadaluarsa from './sections/AnalisisKadaluarsa';
import Dashboard from './sections/Dashboard';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
            <Header />
            <div className='flex'>
              <Sidebar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/infopendonor" element={<InfoPendonor />} />
                <Route path="/analisiskadaluarsa" element={<AnalisisKadaluarsa />} />
            </Routes>
            </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
