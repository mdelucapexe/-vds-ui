import { Box } from "@mui/material";

interface ExampleContainerProps {
    children: React.ReactElement;
}

export const ExContainer: React.FC<ExampleContainerProps> = ({ children }) => {

    return (
        <Box sx={{ border: '1px solid #ddd', backgroundColor: 'diamond', padding: 2 }}>
            {children}
        </Box>
    );
}
