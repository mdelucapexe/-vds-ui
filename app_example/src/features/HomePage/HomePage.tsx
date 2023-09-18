import { Box, Typography } from "@mui/material"
import { StyledSectionDescription, StyledTitle } from "../../docs";

export const HomePage = () => {
    return (
        <Box>
            <StyledTitle>
                About Vapor
            </StyledTitle>
            <Typography paragraph>
                Vapor is TeamSystem’s design system for digital products and experiences.
                The system consists of user interface guidelines, working code, design tools and resources.
            </Typography>
            <StyledSectionDescription>
                Guiding principles
            </StyledSectionDescription>
            <a href="https://zeroheight.com/9wvncgrsz/v/latest/p/65b273-about-vapor">Riferimento alla guida ufficiale</a>
        </Box>
    );
}