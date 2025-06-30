import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../components/AnimatedComponent/AnimatedComponent"

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        backgroundColor: "#f2f",
         color: theme.palette.getContrastText("#000"),
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "TailwindCss", "Material UI", "Figma", "Shadcn UI", "Canva"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>

                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined" color="#000">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Bytes4future</Typography>
                                <Typography textAlign="center">Programming</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                            <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">CFPM</Typography>
                                <Typography textAlign="center">Electricity</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        I'm Olga Macamo, a Junior Full Stack Developer and trained Electrician with a strong passion for technology, design, and innovation. I have hands-on experience building complete web applications, from the backend using Node.js, Express, and MongoDB, to the Frontend using HTML, CSS, JavaScript, and React.
                        I enjoy creating functional and user-friendly interfaces, always paying close attention to user experienceby combining Programming logic with a solid technical foundation as an Electrician, I bring a unique prespective and problem-solving mindset to every project.
                        I'm open to collaborations, freelance work, and new opportunities that allow me to keep growing in my journey as a developer.

                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}  >
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <AnimationComponent
                                moveDirection="left"
                                delay={index * 100}
                                >
                                    <StyledCard variant="outlined">
                                    {skill}

                                    </StyledCard>

                                </AnimationComponent>
                                
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection