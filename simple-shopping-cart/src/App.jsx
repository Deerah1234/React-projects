import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Items from "./Items";

const App = () => {
    const [items, setItems] = useState([
        { itemValue: "item 1", quantity: 0, isSelected: false },
    ]);

    const [inputValue, setInputValue] = useState("");

    const [totalQuantity, setTotalQuantity] = useState(0);

    const [isClicked, setIsClicked] = useState(false);

    const handleAddItems = () => {
        if (inputValue.length > 0) {
            const newItem = {
                itemValue: inputValue,
                quantity: 0,
                isSelected: false,
            };

            const newItems = [...items, newItem];

            setItems(newItems);
            setInputValue("");
            setIsClicked(false);
        } else {
            setIsClicked(true);
            setItems(items);
        }
    };

    const handleComplete = (index) => {
        const newItems = [...items];

        newItems[index].isSelected = !newItems[index].isSelected;
        newItems[index].quantity = 0;

        setItems(newItems);
        calculateTotalQuantity();
    };

    const handleDecrementQuantity = (index) => {
        const newItems = [...items];

        if (newItems[index].quantity > 0) {
            newItems[index].quantity--;
        } else {
            newItems[index].quantity;
        }

        setItems(newItems);
        calculateTotalQuantity();
    };

    const handleIncrementQuantity = (index) => {
        const newItems = [...items];

        newItems[index].quantity++;

        setItems(newItems);
        calculateTotalQuantity();
    };

    const calculateTotalQuantity = () => {
        const total = items.reduce((accumulator, item) => {
            return accumulator + item.quantity;
        }, 0);

        setTotalQuantity(total);
    };

    return (
        <div className="app-background">
            {/* For the input section */}
            <div className="main-section">
                <div className="add-item-box">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Add more items..."
                        className="add-box"
                    />
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="plus-button"
                        onClick={handleAddItems}
                    />
                    {isClicked ? <p>Must input an item to be added</p> : null}
                </div>
                {/* For the item list */}
                <Items
                    items={items}
                    handleComplete={handleComplete}
                    handleDecrementQuantity={handleDecrementQuantity}
                    handleIncrementQuantity={handleIncrementQuantity}
                />
                <span>Total: {totalQuantity}</span>
            </div>
        </div>
    );
};

export default App;
