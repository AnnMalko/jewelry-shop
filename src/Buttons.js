function Buttons({ filteredClothes }) {
    return (
        <div className="cont">
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
