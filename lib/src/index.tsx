import * as React from "react";

interface Test {
    name: string;
    onClick: any;
}

export const Button = (props: Test) => {

    return (
        <button onClick={props.onClick}>
            {props.name}
        </button>
    );
}