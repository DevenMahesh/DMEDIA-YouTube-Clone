import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Typography, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './Videos';
import { Loader } from './Loader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { statistics: { viewCount, likeCount } } = videoDetail;
  const { snippet: { title, channelId, channelTitle } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={2} sx={{ backgroundColor: 'black' }}>
          <Paper elevation={3}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          </Paper>
        </Box>
        <Box flex={1} sx={{ color: 'white', p: 2 }}>
          <Typography variant="h5" fontWeight="bold" p={2} sx={{ color: 'black' }}>
            {title}
          </Typography>
          <Link to={`/channel/${channelId}`}>
            <Typography variant="subtitle1" color="inherit" sx={{ color: 'black' }}>
              {channelTitle}
              <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
            </Typography>
          </Link>
          <Stack direction="row" gap="20px" alignItems="center">
            <Typography variant="body1" sx={{ opacity: 0.7, color: 'black' }}>
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.7, color: 'black' }}>
              {parseInt(likeCount).toLocaleString()} likes
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
        <Videos videos={videos} direction="column" />
      </Box>
    </Box>
  );
};

export default VideoDetail;
