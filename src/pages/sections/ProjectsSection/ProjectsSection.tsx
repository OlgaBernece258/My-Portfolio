import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../components/AnimatedComponent/AnimatedComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Mongoose Bank",
            subtitle: "jun 2025",
            srcImg: "/src/assets/image/mongosse.jpg",
            description: "Sistema de Gestão Bancária, Projecto executado em equipe no Hackthon do Bytes4future com objectivo de desenvolver um sistema para um banco, para optimizar a gestão de filas, verificação do estado no sistema bancário por parte dos clientes e redução do nível de espera desnecessária. ",
            technologies: "Technologies: TypeScript, React.js, React Router, Tailwind CSS, Shadcn UI, Mongoose, Dotenv, MongoDB, Express, Node.js",
            codeURL: "https://www.linkedin.com/in/olga-bernece-pinto-macamo-41458228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
            title: "Task-manager",
            subtitle: "May 2025",
            srcImg: "/src/assets/image/taskmanager.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: React.js, Typescript, TailwindCss ",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        {
            title: "E-commerce",
            subtitle: "Jun 2025",
            srcImg: "/src/assets/images/project1-craze-maze.gif",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Project Blotting",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/src/assets/images/project2-blotting.png",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
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
