import { useState } from "react";

export default function Calculator() {
    const [number, setNumber] = useState(0);
    const [holdNumber, setHoldNumber] = useState(0);
    const [operation, setOperation] = useState('');

    const handleChangeNumber = (enteredNumber) => {
        setNumber(parseFloat(String(number) + enteredNumber))
    }

    const handleRemoveNumber = () => {
        const numberString = String(number);

        if(numberString.length === 0) {
            setNumber(0)
        } else {
            setNumber(parseFloat(numberString.slice(0, numberString.length - 1)))
        }
    }
}