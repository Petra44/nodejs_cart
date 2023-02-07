import { products, cart } from "../data.js";

const addToCart = async (req, res) => {
  try {
    const { id } = req.body;
    const filteredProduct = products.filter((product) => product.id === +id);
    cart.push(filteredProduct[0]);
    res.status(201).json({ status: "succes" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  try {
    const { id } = req.body;
    //const newArr = cart.filter((product) => product.id !== +id);
    const indexnr = cart.findIndex((item) => +id === item.id);
    cart.splice(indexnr, 1);

    console.log(cart); // Append new contents
    res.status(201).json({ status: "succes" });
  } catch (error) {
    console.error(error);
  }
};

export { addToCart, deleteFromCart };
