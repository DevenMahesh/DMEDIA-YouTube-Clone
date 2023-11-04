import { Link } from 'react-router-dom'
import React from 'react'
import { Card, Typography, CardContent, CardMedia, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet}}) => {
    console.log(videoId, snippet);
  return (
    <Card sx={{ width: { md: '320px', xs:'100%'}, boxShadow: 'none', borderradius: 0}}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}         alt={snippet?.tittle}
         sx={{ width: 358, height: 180 }}
         />

        
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height:'106px' }}>
            <Stack>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >            
            <Typography variant="subtitle1 fontweight="bold color="#FFF">
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0.60)}
            </Typography>
        </Link>
        </Stack>
        <Stack>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >            <Typography variant="subtitle2 fontweight="bold color="gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{ fontSize: 12, color:'gray', ml:'5px' }} />
            </Typography>
        </Link>
        </Stack>

       </CardContent>
    </Card>
  )
}

export default VideoCard