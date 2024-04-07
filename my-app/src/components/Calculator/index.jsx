import { useState } from "react";
import styles from "./index.css";

export default function Home() {
    const [number, setNumber] = useState(0);

    const [holdNumber, setHoldNumber] = useState(0);
    const [operation, setOperration] = useState('');

    const handleChangeNumber = (enteredNumber) => {
        setNumber(enteredNumber)
    }

    const Head = () => {
        return (
            <div></div>
        );
    }

    return (
        <>
            <Head>
                <title>계산기</title>
                <meta name="description"content="Web site created using create-react-app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.calculated}>
                        {0}
                    </div>
                    <div>
                        <button className={styles.btn}>.</button>
                        <button className={styles.btn}>%</button>
                        <button className={styles.btn}>AC</button>
                        <button className={styles.btn}>{'<-'}</button>
                    </div>
                    <div>
                        <button className={styles.btn} onClick={() => handleChangeNumber(1)}>1</button>
                        <button className={styles.btn} onClick={() => handleChangeNumber(2)}>2</button>
                        <button className={styles.btn} onClick={() => handleChangeNumber(3)}>3</button>
                        <button className={styles.btn} >+</button>
                    </div>
                    <div>
                        <button className={styles.btn} onClick={() => handleChangeNumber(4)}>4</button>
                        <button className={styles.btn} onClick={() => handleChangeNumber(5)}>5</button>
                        <button className={styles.btn} onClick={() => handleChangeNumber(6)}>6</button>
                        <button className={styles.btn} >-</button>
                    </div>
                    <div>
                        <button className={styles.btn} onClick={() => handleChangeNumber(7)}>7</button>
                        <button className={styles.btn} onClick={() => handleChangeNumber(8)}>8</button>
                        <button className={styles.btn} onClick={() => handleChangeNumber(9)}>9</button>
                        <button className={styles.btn}>*</button>
                    </div>
                </div>
            </main>
        </>
    )
}