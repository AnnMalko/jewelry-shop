import { useEffect, useState } from "react";
import LoaderPage from "./Loader/LoaderPage";

function Buttons({ filteredItems, allItems }) {
    const [stateLoader, setStateLoader] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {

        if (buttonClicked) {
            setStateLoader(true);
            const timer = setTimeout(() => {
                setStateLoader(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [buttonClicked]);

    const handleButtonClick = (category) => {
        setButtonClicked(true);
        setStateLoader(true);

        setTimeout(() => {
            setStateLoader(false);
            setButtonClicked(false);
            if (category === "all") {
                allItems("all");
            } else {
                filteredItems(category);
            }
        }, 500);
    };

    return (
        <div className="cont">
            {stateLoader && <LoaderPage />}
            <button className="change" onClick={() => handleButtonClick("ring")}>
                Rings
            </button>
            <button className="change" onClick={() => handleButtonClick("bracelet")}>
                Bracelets
            </button>
            <button className="change" onClick={() => handleButtonClick("earrings")}>
                Earrings
            </button>
            <button className="change" onClick={() => handleButtonClick("pendant")}>
                Pendant
            </button>
            <button className="change" onClick={() => handleButtonClick("necklace")}>
                Necklaces
            </button>
            <button className="change" onClick={() => handleButtonClick("all")}>
                Show All
            </button>
        </div>
    );
}

export default Buttons;


