import React from 'react'
import { Box, Card, Typography, CardContent, CardMedia, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture, demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { Link } from 'react-router-dom'


export const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
   <Box
   sx={{
    boxShadow: 'none',
    borderRadius: '20px',
    display : 'flex',
    justifyContent: 'center',
    alignitems: 'center',
    width: { xs:'365px', md: '320px'},
    height: '326px',
    margin: 'auto',
    marginTop: marginTop ,
   }}
   >
<Link to={`/channel/${channelDetail?.id?.channelId}`}>    
<CardContent 
     sx={{
        display: 'flex', flexDirection: 'column',
         justifyContent: 'center', textalign:'center',
          color:"#fff"
     }}
    >
    <CardMedia 
      image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}      alt={ channelDetail?.snippet?.tittle}
      sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
    />
    <Typography  variant="h6">
        {channelDetail?.snippet?.title}
        <CheckCircle sx={{ fontSize: 14, color:'gray', ml:'5px' }} />
    </Typography>
     
     <Typography>
      {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
      Subscribers
     </Typography>



    </CardContent>
  </Link>
   </Box>
  )
}

export default ChannelCard