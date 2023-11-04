import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Feed from './components/Feed';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Box sx = {{backgroundColor :'#000'}}></Box>
         <Navbar></Navbar>
         <Routes>

          <Route path ="/" exact element={<Feed/>} />
          <Route path ="/video/:id" exact element={<VideoDetail />} />
          <Route path ="/channel/:id" exact element={<ChannelDetail />} />
          <Route path ="/search/:searchCategory" exact element={<SearchFeed />} />

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
