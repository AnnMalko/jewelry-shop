import { useEffect, useState } from "react";
import LoaderPage from "./Loader/LoaderPage";

function Buttons({ filteredClothes }) {
    const [stateLoader, setStateLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setStateLoader(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="cont">
            {stateLoader && <LoaderPage />}
            <button className="change" onClick={() => filteredClothes("ring")}>
                Rings
            </button>
            <button className="change" onClick={() => filteredClothes("bracelet")}>
                Bracelets
            </button>
            <button className="change" onClick={() => filteredClothes("earrings")}>
                {" "}
                Earrings
            </button>
            <button className="change" onClick={() => filteredClothes("pendant")}>
                {" "}
                Pendant
            </button>
            <button className="change" onClick={() => filteredClothes("necklace")}>
                Necklaces
            </button>
        </div>
    );
}

export default Buttons;
