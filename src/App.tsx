import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Container, Typography, Stack, Box, Alert } from '@mui/material'
import globalColors from './tokens/globalColors'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Container sx={{paddingTop: '4rem'}}>
        <Box mb={4}>
        <Typography variant="h2" mb={2} color={globalColors.Gray600}>Typography</Typography>
        <Typography variant="h1" mb={2}>H1. BAEMIN đến rồi! Đăng ký ngay!<br />Đơn hàng tăng cao, thu nhập rủng rỉnh.</Typography>
        <Typography variant="h2" mb={2}>H2. BAEMIN đến rồi! Đăng ký ngay!<br />Đơn hàng tăng cao, thu nhập rủng rỉnh.</Typography>
        <Typography variant="h3" mb={2}>H3. BAEMIN đến rồi! Đăng ký ngay!<br />Đơn hàng tăng cao, thu nhập rủng rỉnh.</Typography>
        <Typography variant="h4" mb={2}>H4. BAEMIN đến rồi! Đăng ký ngay!<br />Đơn hàng tăng cao, thu nhập rủng rỉnh.</Typography>
        <Typography variant="h5" mb={2}>H5. BAEMIN đến rồi! Đăng ký ngay!<br />Đơn hàng tăng cao, thu nhập rủng rỉnh.</Typography>
        <Typography variant="h6" mb={2}>H6. BAEMIN đến rồi! Đăng ký ngay!<br />Đơn hàng tăng cao, thu nhập rủng rỉnh.</Typography>
        <Typography variant='body1' mb={2}>
        BODY1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum accumsan lobortis. Nulla gravida metus quis eros vehicula, ut volutpat magna commodo. Integer vestibulum mi id lectus dapibus tristique. Nunc ac condimentum est. Donec id vestibulum felis, vitae luctus dolor. Donec id viverra dolor. Praesent venenatis augue consequat posuere gravida. Morbi urna dui, volutpat et sem quis, lobortis vehicula sapien. Aenean quis magna scelerisque, imperdiet tellus in, finibus ipsum. Nam arcu tellus, euismod id risus iaculis, convallis rhoncus lorem. Sed vulputate neque vel condimentum suscipit.
        </Typography>
        <Typography variant="body2">
        BODY2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum accumsan lobortis. Nulla gravida metus quis eros vehicula, ut volutpat magna commodo. Integer vestibulum mi id lectus dapibus tristique. Nunc ac condimentum est. Donec id vestibulum felis, vitae luctus dolor. Donec id viverra dolor. Praesent venenatis augue consequat posuere gravida. Morbi urna dui, volutpat et sem quis, lobortis vehicula sapien. Aenean quis magna scelerisque, imperdiet tellus in, finibus ipsum. Nam arcu tellus, euismod id risus iaculis, convallis rhoncus lorem. Sed vulputate neque vel condimentum suscipit.
        </Typography>
        </Box>
        <Box mb={4}>
        <Typography variant="h1" mb={2} color={globalColors.Gray600}>Button component</Typography>
        <Stack direction='row' spacing={2}>
          <Button variant="contained">Test</Button>
          <Button variant="outlined">Test</Button>
          <Button variant="text">Test</Button>
        </Stack>
        </Box>

        <Box mb={4}>
        <Typography variant="h2" mb={2} color={globalColors.Gray600}>Alert</Typography>
        <Box mb={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        </Box>
        <Box mb={2}>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        </Box>
        <Box mb={2}>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        </Box>
        <Box mb={2}>
        <Alert severity="success">This is a success alert — check it out!</Alert>
        </Box>
        </Box>
      </Container>
   
    </div>
  )
}

export default App
