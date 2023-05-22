import React, { useState, useEffect } from "react";

const Dice = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? "white" : "black",
    };
    const [diceNumber, setDiceNumber] = useState("");

    useEffect(() => {
        if (props.value === 1) {
            setDiceNumber("one");
        } else if (props.value === 2) {
            setDiceNumber("two");
        } else if (props.value === 3) {
            setDiceNumber("three");
        } else if (props.value === 4) {
            setDiceNumber("four");
        } else if (props.value === 5) {
            setDiceNumber("five");
        } else if (props.value === 6) {
            setDiceNumber("six");
        }
    }, [props.value]);

    return (
        <div className="dice--face" style={styles} onClick={props.holdDice}>
            <h2 className="die-num">
                <i
                    className={`fas fa-dice-${diceNumber}`}
                    style={{
                        color: props.isHeld ? "#26a641" : "white"
                    }}
                ></i>
            </h2>
        </div>
    );
};

export default Dice;
