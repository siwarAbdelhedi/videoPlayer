import VideoPage from './components/videoPage';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/videoPage" element={<VideoPage/>} />  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
