import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Items from "./Items";

function Home() {
    const [items, setItems] = useState(data);

    const chosenItems = (searchTerm) => {
        const newItems = data.filter(
            (element) => element.searchTerm === searchTerm
        );
        setItems(newItems);
    };

    return (
        <div>
            <div className="cont">
                <p className="back">Free Standard Shipping</p>
            </div>
            <Buttons filteredClothes={chosenItems} />
            <Items itemsForSale={items} />
        </div>
    );
}

export default Home;
