import { styled, Typography } from '@mui/material'
import myPicture from './assets/image/my picture.jpg'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

export const App = () => {

  const StyledHero = styled('div')(() => ({
    background: 'linear-gradient(to right, indigo, purple)',
    height: '100vh',
  }))

  const StyledImage = styled('img')(() => ({
    width: '50vh',
    borderRadius: '50%'

  }))
  

  return (
    <div>
      <StyledHero>
        <Container maxWidth='lg'>
          <Grid container spacing={2} justifyContent='center' alignItems='center' style={{ height: '100%' }}>
            <Grid item xs={12} md={4}>
              <StyledImage src={myPicture} alt="" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color='secondary' variant='h1' textAlign='center' fontFamily={'mono'}>
                Olga Macamo
              </Typography>
              <Typography color='primary' variant='h2' textAlign='center' fontFamily={'mono'}>
               Junior Full Stack Developer
              </Typography>
              <Grid container spacing={2} >
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <button>
                    <DownloadIcon />
                    Download CV
                  </button>
                </Grid>
                <Grid item xs={12} md={4} display='flex' justifyContent= 'center'>
                  <button>
                    <EmailIcon />
                    Contact me
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </div>
    
  )
}
