
import RoomInfo from './component/RoomInfo';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home'
import NotFound from './NotFound';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<RoomInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
