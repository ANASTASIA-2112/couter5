import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Button from "./Button";

function App() {

    const [count, setCount]=useState<number>(0)
    const [startValue, setStartValue] = useState<number | string>(0)
    const [maxValue, setMaxValue] = useState<number | string>(5)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [message, setMessage] = useState<string>(" ")
    const [error, setError] = useState<string | null>(null)
    const [set, setValue]=useState<number>(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem("startValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])

    useEffect(() => {
     localStorage.setItem("startValue", JSON.stringify(startValue));
     localStorage.setItem("maxValue", JSON.stringify(maxValue));
     localStorage.setItem("setValue", JSON.stringify(set));

    }, [startValue, maxValue,set]);



    const incHandler = () => {
        setCount(count+1)
        setStartValue(+startValue+1)

    }

    const resetHandler = () => {
        setStartValue(0)
    }

    const setHandler = () => {
        if (maxValue <= 0 || set >= maxValue) {
            setDisabled(true);
            setMessage("");
        } else {
            setDisabled(false);
            setMessage("");
        }
        setStartValue(set)
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        const currentValue = Number(event.currentTarget.value)
        if (currentValue <= 0 || currentValue <= startValue) {
            setMessage('Incorrect value!');
            setError("error")
            setDisabled(true)
        } else {
            setMessage("enter values and press set");
            setError(null)
            setDisabled(false)
        }
        setMaxValue(currentValue)
        setStartValue("")
    }

    function handleStartValueChange(event: ChangeEvent<HTMLInputElement>) {
        const currentValue = Number(event.currentTarget.value)
        if (currentValue > 0 || currentValue >= maxValue) {
            setMessage("enter values and press set");
            setError(null)
            setDisabled(false)
        } else {
            setMessage('Incorrect value!');
            setError("error")
            setDisabled(true)
        }
        setStartValue(currentValue)
        setStartValue("")
        setValue(currentValue)

    }

    return (
        <div className="App">

            <Counter
                setHandler={setHandler}
                startValue={startValue}
                maxValue={maxValue}
                disabled={disabled}
                handleMaxValueChange={handleMaxValueChange}
                handleStartValueChange={handleStartValueChange}
                error={error}
                message={message}
                count={count}
                set={set}
            />
            <Button
                incHandler={incHandler}
                resetHandler={resetHandler}
                startValue={startValue}
                message={message}
                maxValue={maxValue}
                disabled={disabled}
                error={error}
                set={set}
                count={count}
            />
        </div>
    );

}

export default App;
