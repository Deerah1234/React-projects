import { useEffect, useState } from "react";
import "./App.css";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import ConfettiExplosion from "react-confetti-explosion";

function App() {
    const [dice, setDice] = useState(allNewArray());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allHeld = dice.every((die) => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every((die) => die.value === firstValue);

        if (allSameValue && allHeld) {
            setTenzies(true);
        }
    }, [dice]);

    function generateNewDice() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
        };
    }

    function allNewArray() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDice());
        }
        return newDice;
    }

    const holdDice = (id) => {
        setDice((oldDice) =>
            oldDice.map((die) =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    };

    const diceElements = dice.map((die) => {
        return (
            <Dice
                key={die.id}
                value={die.value}
                isHeld={die.isHeld}
                holdDice={() => holdDice(die.id)}
            />
        );
    });

    const rollDice = () => {
        if (!tenzies) {
            setDice((oldDice) =>
                oldDice.map((die) => (die.isHeld ? die : generateNewDice()))
            );
        } else {
            setTenzies(false);
            setDice(allNewArray());
        }
    };

    const confettiExplosion = new ConfettiExplosion({
        duration: 5000,
        particleCount: 250,
        width: 1600,
        repeat: true,
    });

    return (
        <main>
            {tenzies && <ConfettiExplosion ref={confettiExplosion} />}
            <h2>Tenzies</h2>
            <p>
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="die-container">{diceElements}</div>
            <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    );
}

export default App;
