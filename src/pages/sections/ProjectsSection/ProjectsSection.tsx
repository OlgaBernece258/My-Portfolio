import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../components/AnimatedComponent/AnimatedComponent";
import { href } from "react-router-dom";
import { Description } from "@mui/icons-material";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [

        {
            title: "E-commerce",
            subtitle: "Jun 2025",
            srcImg: "/src/assets/image/E-comerce.png",
            description: "The project consists of an E-commerce system.",
            technologies: "Technologies: React.js, Express, TypeScript, MongoDB",
            codeURL: "https://github.com/Jay-Ubisse/b4f-2-final-project",
        },
          {
            title: "Mini Movie Platform",
            subtitle: "Apr 2025",
            srcImg: "/src/assets/image/MiniPlataforma.png",
            description: "The application allows users to create, edit, delete, list, and view movie details. The data is stored in an array of objects, simulating a database",
            technologies: "Technologies: JavaScript, HTML, CSS.",
            codeURL: "https://github.com/Jay-Ubisse/mini-plataforma-filmes-b4f",
        },
           {
            title: "Spotdados",
            subtitle: "May 2025",
            srcImg: "/src/assets/image/1751376015252.jpg",
            description: "Collaborative mobile project developed to present user listening history data from a music application",
            technologies: "Technologies: React.js, Typescript, TailwindCss, react-router.",
            codeURL: "https://github.com/isaneyde/spotdados",
        },
        {
            title: "Mongoose-Bank",
            subtitle: "jun 2025",
            srcImg: "/src/assets/image/mongosse.jpg",
            description: "Bank Management System, a team project developed during the Bytes4Future Hackathon. The goal was to create a system for a bank to optimize queue management, allow clients to check their service status in real-time, and reduce overall wait times.",
            technologies: "Technologies: TypeScript, React.js, React Router, Tailwind CSS, Shadcn UI, Mongoose, Dotenv, MongoDB, Express, Node.js",
            codeURL: "https://github.com/isaneyde/banco-mongoose",
        },
        {
            title: "Task-manager",
            subtitle: "May 2025",
            srcImg: "/src/assets/image/taskmanager.png",
            description: "Gestor de tarefas do dia a dia.",
            technologies: "Technologies: React.js, Typescript, TailwindCss ",
            codeURL: "https://github.com/OlgaBernece258/tarefas-olma",
        },
           {
            title: "Portfolio-2",
            subtitle: "jun 2025",
            srcImg: "/src/assets/image/Captura de ecrã 2025-07-01 153622.png",
            description: "My Portfolio",
            technologies: "Technologies: React.js, Typescript, TailwindCss, React-router, Material UI,",
            codeURL: "https://github.com/OlgaBernece258/My-Portfolio",
        },
            
            {
            title: "Portfolio-1",
            subtitle: "Mar 2025",
            srcImg: "/src/assets/image/Captura de ecrã 2025-07-01 154735.png",
            description: "My Portfolio",
            technologies: "Technologies: HTML, JavaScript, CSS.",
            codeURL: "https://github.com/OlgaBernece258/My-Portfolio",
        },
            {
            title: "LandingPage",
            subtitle: "Apr 2025",
            srcImg: "/src/assets/image/edm.png",
            description: "This project is currently in progress.",
            technologies: "Technologies: React.js, JavaScript, Css, Material UI,",
            codeURL: "https://github.com/OlgaBernece258/landing-page",
        },
        
        
      
      
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}codeURL={project.codeURL}
                                />
                                     </AnimationComponent>
                                     </Grid>
                                     ))}
                                    </Grid>
                                    </Container>
                                    </StyledExperience>
                     )
                      }

export default ProjectsSection
