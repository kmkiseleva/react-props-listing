const Listing = ({ items }) => {
  const levelClass = (quantity) => {
    if (quantity <= 10) {
      return "item-quantity level-low";
    } else if (quantity <= 20 && quantity > 10) {
      return "item-quantity level-medium";
    } else if (quantity > 20) {
      return "item-quantity level-high";
    }
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.listing_id} className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={Math.random()} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50
                ? `${item.title.slice(0, 50)}...`
                : item.title}
            </p>
            <p className="item-price">
              {item.currency_code === "USD"
                ? "$"
                : item.currency_code === "EUR"
                ? "€"
                : item.currency_code}{" "}
              {item.price}
            </p>
            <p className={levelClass(item.quantity)}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
