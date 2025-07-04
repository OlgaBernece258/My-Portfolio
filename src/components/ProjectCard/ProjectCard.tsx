import Typography from "@mui/material/Typography";
import { GridLegacy } from "@mui/material";
import StyledButton from "../StyledButton/StyleButton";
import { styled } from "@mui/material";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    codeURL: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "50px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "#ffffff",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: "#000"
        }
    }));

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <GridLegacy container spacing={1} pt={2}>
                <GridLegacy item xs={6}>
                    <StyledButton onClick={() => window.open(codeURL)}>View Code</StyledButton>
                </GridLegacy>
            </GridLegacy>
        </StyledCard>
    )
}

export default ProjectCard
