import { Grid, Typography } from "@mui/material";
import StyledButton from "../StyledButton/StyleButton";
import { styled, keyframes } from "@mui/material";

const borderGlow = keyframes`
  0% {
    border-image-source: linear-gradient(135deg, #8e44ad, #3498db);
  }
  50% {
    border-image-source: linear-gradient(135deg, #f39c12, #e74c3c);
  }
  100% {
    border-image-source: linear-gradient(135deg, #8e44ad, #3498db);
  }
`;

const StyledCard = styled("div")(({ theme }) => ({
  position: "relative",
  border: "4px solid",
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(135deg, #8e44ad, #3498db)",
  borderRadius: "16px",
  background: "#fff",
  padding: "20px",
  color: theme.palette.primary.contrastText,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  animation: `${borderGlow} 6s linear infinite`,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  },
}));
export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    codeURL: string;
    sx: string;
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
            backgroundColor: "#f2f"
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
            <Grid container spacing={1} pt={2}>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(codeURL)}>View Project</StyledButton>
                </Grid>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(codeURL)}>View Code</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard
