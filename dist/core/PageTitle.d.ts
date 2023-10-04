import * as React from 'react';
export declare type PageTitleProps = {
    title: string;
    textAlign?: 'center' | 'left' | 'right';
    content?: any;
    historyBackEvent?: React.MouseEventHandler<HTMLElement>;
    actions?: any;
};
export declare const PageTitle: React.FC<PageTitleProps>;
