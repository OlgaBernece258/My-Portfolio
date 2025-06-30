import { Box, Container, IconButton, Typography, keyframes, styled } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

// ✨ Animação de entrada
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// 📦 Container animado do footer
const AnimatedFooter = styled(Box)`
  background-color: #000;
  animation: ${fadeInUp} 1s ease-in-out;
`

const Footer: React.FC = () => {
  return (
    <AnimatedFooter pt={2} pb={2}>
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center" alignItems="center" gap={3} pb={1}>
          <IconButton
            component="a"
            href="https://github.com/OlgaBernece258"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#ffffff", 
                transition: "scale(1.2)",
                "&: hover":{
                 transform: "scale(1.2)",
                color: "#000",
                }

            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/olga-bernece-pinto-macamo-41458228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#ffffff",
                transition: "scale(1.2)",
                "&: hover": {
                 transform: "scale(1.2)",
                color: "#000",
                }
             }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/public/Olga-Berne%C3%A7e-A-Peregrina"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#ffffff",
                transition: "scale(1.2)",
                "&: hover": {
                 transform: "scale(1.2)",
                color: "#000",
                }
             }}
          >
            <FacebookIcon />
          </IconButton>
        </Box>
        <Typography textAlign="center" sx={{ color: "#ffffff" }}>
          © {new Date().getFullYear()} Olga Macamo – All rights reserved
        </Typography>
      </Container>
    </AnimatedFooter>
  )
}

export default Footer