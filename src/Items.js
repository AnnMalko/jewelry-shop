function Items({ itemsForSale }) {
    return (
        <div className="products">
            {itemsForSale.map((element) => {
                const { id, name, searchTerm, price, image } = element;
                return (
                    <div className="product-card" key={id}>
                        <img
                            src={image}
                            width="200px"
                            height="200px"
                            alt="item"
                            className="hover"
                        />
                        <div className="product-info">
                            <p className="description">{name}</p>
                            <p className="description">{searchTerm}</p>
                            <p className="description">$ {price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Items;
