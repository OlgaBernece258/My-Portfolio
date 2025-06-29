import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../components/AnimatedComponent/AnimatedComponent"

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        backgroundColor: "#ff4889",
         color: theme.palette.getContrastText("#ff4889"),
        '&:hover': {
            backgroundColor: theme.palette.primary.light
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
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center"></Typography>
                                <Typography textAlign="center">Programmy</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras porta semper velit vel rutrum.
                        Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris.
                        Phasellus a ultrices elit.
                        Curabitur ut diam eu orci auctor pretium.
                        Nullam ultricies erat quam, eget porta velit vehicula sit amet.
                        Nullam sodales iaculis metus, sed vestibulum nisl vulputate at.
                        Integer in pulvinar libero.
                        Donec ornare est quis tortor varius efficitur.
                        Maecenas sed erat quis felis facilisis pellentesque.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id felis convallis, luctus lorem eget, varius dolor.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <AnimationComponent
                                moveDirection="up"
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