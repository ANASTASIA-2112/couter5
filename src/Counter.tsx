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


}

const Counter = (props: PropsCounterProps) => {
    return (
        <div className={"display"}>
            <>

                Max value:
                <input
                    type="number"
                    onChange={props.handleMaxValueChange}
                    className={props.error ? "error" : ""}//выводиться рамка при нажатии на кнопку и +
                    value={props.maxValue}
                />
                Start value:
                <input
                    type="number"
                    onChange={props.handleStartValueChange}
                    className={props.error ? "error" : ""}//выводиться рамка при нажатии на кнопку и +
                    value={props.startValue}
                />
            </>

            <button
                value={"set"}
                onClick={props.setHandler}
                disabled={props.startValue === props.maxValue || props.disabled}>
                set
            </button>
        </div>
    );
};

export default Counter;