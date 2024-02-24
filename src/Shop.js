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

    const allItems = (show) => {
        const allItems = data.filter(
            (element) => element.show === show
        );
        setItems(allItems);
    };

    return (
        <div>
            <div className="cont">
                <p className="back">Free Standard Shipping</p>
            </div>
            <Buttons filteredItems={chosenItems} allItems={allItems} />
            <Items itemsForSale={items} />
        </div>
    );
}

export default Home;
