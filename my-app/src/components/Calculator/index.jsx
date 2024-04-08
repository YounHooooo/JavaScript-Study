import React, { useState } from "react";

export default function Home() {
    const [number, setNumber] = useState('');
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

    const handleClickOperation = (enteredOperation) => {
        if (number != 0) {
            setOperation(enteredOperation)

            setHoldNumber(number)

            setNumber(0)
        }

    }


    const handleCalculation = () => {
        switch (operation) {

            case '+':
                setNumber(holdNumber + number)
                break;

            case '-':
                setNumber(holdNumber - number)
                break;

            case '*':
                setNumber(holdNumber * number)
                break;

            case '/':
                setNumber(holdNumber / number)
                break;

            case '%':
                setNumber(holdNumber % number)
                break;

            default:
                setNumber(holdNumber + number)
                break;
        }
    }

    const Head = () => {
        return (
            <div></div>
        );
    }


    // css
    const styles = {
        container: {
            border: "1px solid black",
            padding: "20px",
            width: "220px",
            // minWidth: "14vw",
            margin: "0 auto",
        },
        
        calculated: {
            border: "1px solid black",
            padding: "10px 10px 10px 10px",
            // width: "12vw",
            width: "193px",
        },

        btn: {
            width: "50px",
            height: "50px",
            margin: "5px 5px 5px 0",
        },
        
        main: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            aligIitems: "center",
            paddingTop: "1rem",
            minHeight: "100vh",
        },
    };


    return (
        <>
            <Head>
                <title>계산기</title>
                <meta name="description"content="Web site created using create-react-app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            </Head>
            <main style={styles.main} className={styles.main}>
                <div style={styles.container} className={styles.container}>
                    <div style={styles.calculated} className={styles.calculated}>
                        {number}
                    </div>
                    <div>
                        <button style={styles.btn} className={styles.btn}>.</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleClickOperation('%')}>%</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => setNumber(0)}>AC</button>
                        <button style={styles.btn} className={styles.btn} onClick={handleRemoveNumber}>{'<-'}</button>
                    </div>
                    <div>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(1)}>1</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(2)}>2</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(3)}>3</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleClickOperation('+')}>+</button>
                    </div>
                    <div>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(4)}>4</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(5)}>5</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(6)}>6</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleClickOperation('-')}>-</button>
                    </div>
                    <div>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(7)}>7</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(8)}>8</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(9)}>9</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleClickOperation('*')}>*</button>
                    </div>
                    <div>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleChangeNumber(0)}>0</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleClickOperation('-')}>-</button>
                        <button style={styles.btn} className={styles.btn} onClick={handleCalculation}>=</button>
                        <button style={styles.btn} className={styles.btn} onClick={() => handleClickOperation('/')}>/</button>
                    </div>
                </div>
            </main>
        </>
    )
}