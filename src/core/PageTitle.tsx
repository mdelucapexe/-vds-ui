import { IconButton } from '@mui/material';
import { styled } from '@mui/styles';
import * as React from 'react';
import { BiArrowBack } from 'react-icons/bi';

export type PageTitleProps = {
    title: string;
    textAlign?: 'center' | 'left' | 'right';
    content?: any;
    historyBackEvent?: React.MouseEventHandler<HTMLElement>;
    actions?: any;
}

const StyledPageTitle = styled('div')({
    borderBottom: '2px solid #0090D1',
    display: 'flex',
});

const StyledTitleContainer = styled('div')(() => ({
    'flex-grow': 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '9px 13px',
    justifyContent: 'center',
    backgroundColor: 'white',
    '& .title': {
        fontSize: '16px',
        color: '#005075',
        letterSpacing: '0',
        fontFamily: 'Cairo SemiBold',
        fontWeight: 600,
        textAlign: 'center'
    },
    '& .description': {
        '& .MuiLink-root': {
            fontWeight: 400,
            fontSize: '12px',
            color: '#0090D1',
            textDecoration: 'none!important'
        },
        '& :not(.MuiLink-root)': {
            fontSize: '12px',
            color: '#005075',
            fontStyle: 'bold',
            fontWeight: 700
        },
        '& svg': {
            fontSize: '12px',
            backgroundColor: 'white',
            color: '#0090D1',
        },
        display: 'flex',
        justifyContent: 'center',
        fontSize: '12px',
        color: '#5A6872',
        letterSpacing: '0',
        fontFamily: 'Roboto',
        lineHeight: "10px",
        fontWeight: 400,
        textAlign: 'center'
    }
}));

export const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {

    const { title, actions, content, historyBackEvent, textAlign = 'center' } = props;

    return (
        <StyledPageTitle>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: textAlign,
                backgroundColor: 'white',
                paddingLeft: '8px'
            }}>
                {historyBackEvent && <IconButton onClick={historyBackEvent}>
                    <BiArrowBack
                        style={{
                            color: "#0090D1",
                            fontWeight: 400
                        }} />
                </IconButton>}
            </div>
            <StyledTitleContainer>
                <span className="title">{title.toUpperCase()}</span>
                {content && <span className="description">{content}</span>}
            </StyledTitleContainer>
            {actions && <div style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: textAlign,
                backgroundColor: 'white',
                paddingRight: '8px'
            }}>
                {actions}
            </div>}
        </StyledPageTitle>
    );
}
