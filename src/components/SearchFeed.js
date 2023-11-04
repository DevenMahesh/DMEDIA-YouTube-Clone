import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import SideBar from './SideBar';
import Stack from '@mui/material/Stack';
import Videos from './Videos';
import { fetchFromAPI, BASE_URL } from '../utils/fetchFromAPI';
import { useParams } from 'react-router';


const SearchFeed = () => {
  const {searchCategory} = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    

      fetchFromAPI(`search?part=snippet&q=${searchCategory}`)
      .then((data) => setVideos(data.items))
      console.log(videos)
    }, [searchCategory]);

  return (
    <Stack sx= {{ background: "#000", flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
        <span style={{ color: "#FC1503" }}>{searchCategory}</span>
        </Typography>
      </Box>

      
 
      <Box>
        <Videos videos={videos} />
      </Box>
      
    </Stack>
  );
};

export default SearchFeed;