import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'

export const Loader = () => {
  return (
    <Box menHeight = "95vh">

        <Stack direction = "row" justifyContent = 'center' alignItems = 'center' height = '80vh'>

        <CircularProgress />
        </Stack>


    </Box>
  )
}

export default Loader;