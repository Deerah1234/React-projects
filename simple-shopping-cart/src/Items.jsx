import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faCircleCheck,
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Items = ({
    items,
    handleComplete,
    handleDecrementQuantity,
    handleIncrementQuantity,
}) => {
    return (
        <div className="item-list">
            {items.map((item, index) => (
                <div className="item-container" key={index}>
                    <div
                        className="item-name"
                        onClick={() => handleComplete(index)}
                    >
                        {item.isSelected ? (
                            <>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className="circle-1"
                                />
                                <span className="completed">
                                    {item.itemValue}
                                </span>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    className="circle-1"
                                />
                                <span>{item.itemValue}</span>
                            </>
                        )}
                    </div>
                    <div className="quantity">
                        <button>
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                onClick={() => handleDecrementQuantity(index)}
                            />
                        </button>
                        <span>{item.quantity}</span>
                        <button>
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                onClick={() => handleIncrementQuantity(index)}
                            />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;
