import React from "react";

const Dice = (props) => {
    const style = {
        backgroundColor: "#59e391",
    };
    return (
        <div
            className="dice--face"
            style={props.isHeld ? style : null}
            onClick={props.holdDice}
        >
            <h2>{props.value}</h2>
        </div>
    );
};

export default Dice;
