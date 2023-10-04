import { Box, styled } from "@mui/material"
import { PageTitle } from 'vapor-design-system';
import { ExContainer } from "../components";

export const StyledTitle = styled('span')(() => ({
    fontFamily: 'Cairo',
    color: 'var(--colors-blocks-content-text-styleguide-title, #212121)',
    marginBottom: '16px',
    fontSize: '2.5rem',
    fontWeight: '700',
    lineHeight: '3rem'
}));

export const StyledSectionDescription = styled('span')(() => ({
    fontSize: "1rem",
    lineHeight: "3rem",
    fontWeight: 700,
    display: "block",
    overflow: "hidden",
    maxWidth: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: '#005075',
    cursor: 'auto'
}));

export const DocPageTitlePage = () => {

    return (
        <Box>
            <StyledTitle>
                Page Title
            </StyledTitle>
            <p>
                Page title defines a specific area, always placed on the top of the page and below the header,
                with specific information regarding the name of the page and all the navigation indication required
                (i.e. breadcrumb, page information, section title…).
            </p>
            <StyledSectionDescription>
                Default View
            </StyledSectionDescription>
            <ExContainer
                exCase={
`<PageTitle 
    title="Lorem ipsum"
/>`
                }
            >
                <PageTitle title="Lorem ipsum" />
            </ExContainer>
            <StyledSectionDescription>
                With description
            </StyledSectionDescription>
            <ExContainer
                exCase={
`<PageTitle 
    title="Lorem ipsum"
    content="lorem ipsum dolor sit amlet"
/>`
                }
            >
                <PageTitle title="Lorem ipsum" content="lorem ipsum dolor sit amlet" />
            </ExContainer>
        </Box>
    );
}
