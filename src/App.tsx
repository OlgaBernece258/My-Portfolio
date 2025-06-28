import { styled, Typography } from '@mui/material'
import myPicture from './assets/image/my picture.jpg'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import background from './assets/image/background.jpg'
import NavBar from './components/NavBar';
import { Footer } from './components/footer';
import { About } from './pages/sections/About/About';
export const App = () => {

  const StyledHero = styled('div')(() => ({
    background: 'url(' + background + ') no-repeat center center  / cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    '& button': {
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'background-color 0.3s, color 0.3s',

      '&:hover': {
        backgroundColor: 'white',
        color: '#000'
      }
    }
  }))

  
  const handleDownloadCV = () => {
    
    window.open('/src/assets/cv.olga bernece pinto macamo.pdf', '_blank');
  };

  const handleContactMe = () => {

    window.open('https://www.linkedin.com/in/olga-bernece-pinto-macamo-41458228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank') 

    
    ;
  };

  const StyledImage = styled('img')(() => ({
    width: '50vh',
    borderRadius: '50%'

  }))
  

  return (
    <div>
      <NavBar></NavBar>
      <About></About>



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
                  <button  onClick={handleDownloadCV}> 
                    <DownloadIcon />
                    Download CV
                  </button>
                </Grid>
                <Grid item xs={12} md={4} display='flex' justifyContent= 'center'>
                  <button onClick={handleContactMe}>
                    <EmailIcon />
                    Contact me
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
      <Footer/>
    </div>
    
  )
}
