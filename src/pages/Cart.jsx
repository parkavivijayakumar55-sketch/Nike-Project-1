import { useState } from "react";

function Cart({ cart, setCart }) {

  // 🗑 Remove item
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // ➕ Increase qty
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease qty
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  // 💰 Total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="category-page">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="product-card">

              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              {/* Quantity Controls */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button onClick={() => decreaseQty(item.id)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  marginTop: "10px",
                  border: "none",
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>

            </div>
          ))}

          {/* Total */}
          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;