import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  }

  const cards = cartProducts.map((product) => {
    return (
      <Card key={product.id} style={{ width: "18rem", padding: "10px" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body
          className="d-flex"
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <Card.Title className="text-center">{product.title}</Card.Title>
          <Card.Text className="text-center" style={{ fontWeight: "bold" }}>
            Price: INR {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer
          className="text-center"
          style={{ borderTop: "0", backgroundColor: "#fff" }}
        >
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    );
  });

  return (
    <div>
      <h2>Cart</h2>
      <div
        className="d-flex"
        style={{
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "1rem",
        }}
      >
        {cards}
      </div>
    </div>
  );
};

export default Cart;
