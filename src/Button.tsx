import React from 'react';

type PropsButtonType = {
    incHandler: () => void;
    resetHandler: () => void;
    startValue: number | string;
    message: string;
    maxValue: number | string;
    disabled: boolean;
    error: string | null;
    set:number
    count:number
};

const Button = (props: PropsButtonType) => {
    return (
        <div className="display2">
            <div className="display2">

                <h3 className={props.startValue === props.maxValue ? "red" : ""}>{props.startValue}</h3>
                <h3 className={props.error ? "red" : "blue"}>{props.message}</h3>

            </div>

            <div className="display2">
                <button onClick={props.incHandler} disabled={props.startValue=== props.maxValue || props.disabled}>
                    inc
                </button>
                <button onClick={props.resetHandler}>reset</button>
            </div>
        </div>
    );
};

export default Button;