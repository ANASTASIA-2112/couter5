import React, {ChangeEvent, useEffect,useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Button from "./Button";

function App() {

    const [startValue, setStartValue] = useState<number | string>(0)
    const [maxValue, setMaxValue] = useState<number | string>(5)
    const [disabled, setDisabled] = useState(false)
    const [message, setMessage] = useState<string>(" ")//текст добовляеться
    const [error, setError] = useState<string | null>(null)//текст с ошибкой и подсветкой

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

    }, [startValue, maxValue]);

    const incHandler = () => {
        setStartValue(+startValue + 1)

    }

    const resetHandler = () => {
        setStartValue(0)
    }
    const setHandler = () => {
        if (maxValue <= 0 || startValue >= maxValue) {
            setDisabled(true);
            setMessage("");
        } else {
            setDisabled(false);
            setMessage("");
        }
        setStartValue(startValue);
    }
    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        const currentValue = Number(event.currentTarget.value)

        if (currentValue <= 0 || currentValue <= startValue) {
            setMessage('Incorrect value!');
            setError("error")
        } else {
            setMessage("enter values and press set");
            setError(null)
        }
        setMaxValue(currentValue)
        setStartValue("")
    }
    function handleStartValueChange(event: ChangeEvent<HTMLInputElement>) {
        const currentValue = Number(event.currentTarget.value)
        if (currentValue > 0 || currentValue >= maxValue) {
            setMessage("enter values and press set");
            setError(null)
        } else {
            setMessage('Incorrect value!');
            setError("error")
        }
        localStorage.setItem("startValue", JSON.stringify(currentValue))
        setStartValue(currentValue);
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
            />
            <Button
                incHandler={incHandler}
                resetHandler={resetHandler}
                startValue={startValue}
                message={message}
                maxValue={maxValue}
                disabled={disabled}
                error={error}
            />
        </div>
    );

}

export default App;
