import { Box } from "@mui/material";
import React from "react";
import Editor from "../Editor/Editor";
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

interface ExampleContainerProps {
    children: React.ReactElement;
    exCase: string;
}

export const ExContainer: React.FC<ExampleContainerProps> = ({ children, exCase }) => {

    const [code, setCode] = React.useState(exCase);

    return (
        <Box sx={{ border: '1px solid #ddd', backgroundColor: 'rgb(247, 247, 247)', padding: 2 }}>
            {children}
            <Box sx={{ mt: 2 }}>
                <Editor
                    value={code}
                    onValueChange={(ev) => { setCode(ev); }}
                    highlight={code => highlight(code, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 12,
                        width: 'max-content'
                    }}
                />
            </Box>
        </Box>
    );
}
