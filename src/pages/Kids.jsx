const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 9999,
    image: "/images/men1.jpg",
  },
  {
    id: 2,
    name: "Adidas Runner",
    price: 7999,
    image: "/images/men2.jpg",
  },
];

function Kids() {
  return (
    <div>
      <h1>Kids Collection</h1>

      <div className="products">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;