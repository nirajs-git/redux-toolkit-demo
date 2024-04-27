import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product))
  };

  return (
    <Card style={{ width: "18rem", padding: "10px" }}>
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
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
