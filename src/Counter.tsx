import React, {ChangeEvent} from 'react';


export type PropsCounterProps = {

    startValue: number | string
    setHandler: () => void
    maxValue: number | string
    disabled: boolean
    handleStartValueChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleMaxValueChange: (event: ChangeEvent<HTMLInputElement>) => void
    error: string | null
    message: string
    count:number
    set:number


}

const Counter = (props: PropsCounterProps) => {
    return (
        <div className={"display"}>
            <>

                Max value:
                <input
                    type="number"
                    onChange={props.handleMaxValueChange}
                    className={props.error ? "error" : ""}
                    value={props.maxValue}
                />
                Start value:
                <input
                    type="number"
                    onChange={props.handleStartValueChange}
                    className={props.error ? "error" : ""}

                />
            </>

            <button
                type={"button"}
                value={props.set}
                onClick={props.setHandler}
                disabled={ props.set === props.count || props.disabled}>
                set
            </button>
        </div>
    );
};

export default Counter;