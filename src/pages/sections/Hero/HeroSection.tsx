import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
  keyframes,
} from '@mui/material';
import { AnimatedBackground } from '../../../components/AnimatedBackground/AnimatedBackground';
import Typewriter from '../../../components/TypeWrite/Typewriter';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../components/StyledButton/StyleButton';
import Picture from '../../../assets/image/my picture.jpg';
import WhatsAppModal from '../../../components/WhatsAppModal/WhatsAppModal';


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHero = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    display: 'block',
    padding: '20px',
    paddingTop: '100px',
    paddingBottom: '40px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '100px',
    height: '100vh',
    
  },
}));

const StyledImg = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  height: 'auto',
  border: `1px solid #f2f`,
  borderRadius: '50%',
  display: 'block',
  margin: '0 auto',
  position: 'relative',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  animation: `${fadeInUp} 1s ease-out`,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '#f2e',
  },
}));

const AnimatedButton = styled(StyledButton)`
  animation: ${fadeIn} 1s ease forwards;

  &:nth-of-type(1) {
    animation-delay: 0.8s;
  }

  &:nth-of-type(2) {
    animation-delay: 50s;
  }
`;


const handleDownload = () => {
  window.open('/src/assets/cv.olga bernece pinto macamo.pdf', '_blank');
};

const HeroSection: React.FC = () => {
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <Grid item xs={12} md={4}>
            <Box position="relative" pb={3}>
              <Box width="100%" position="absolute" top={100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box textAlign="center">
                <StyledImg src={Picture} alt="Olga Macamo" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typewriter
              text="Olga Macamo"
              delay={200}
              variant="h1"
              color="#f2f"
              stop="200"
              sx={{ fontFamily: 'Helvetica' }}
            />
            <Typewriter
              text="I'm a Junior Fullstack Developer"
              delay={300}
              variant="h2"
              color="primary.contrastText"
              sx={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <Box mt={3}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md="auto" >
                  <AnimatedButton onClick={handleDownload}>
                    <DownloadIcon sx={{ mr: 1 }} />
                    <Typography>Download CV</Typography>
                  </AnimatedButton>
                </Grid>
                <Grid item xs={12} md="auto">
                  <AnimatedButton onClick={() => setWhatsappModalOpen(true)}>
                    <EmailIcon sx={{ mr: 1 }} />
                    <Typography>Contact Me</Typography>
                  </AnimatedButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <WhatsAppModal
        open={whatsappModalOpen}
        onClose={() => setWhatsappModalOpen(false)}
      />
    </StyledHero>
  );
};

export default HeroSection;