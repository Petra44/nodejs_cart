import { products, cart } from "../data.js";

const indexPage = (req, res) => {
  try {
    res.render("index", { pageTitle: "Sportwinkel", products, cart });
  } catch (error) {
    console.log("error");
  }
};

const cartPage = (req, res) => {
  try {
    res.render("cart", { pageTitle: "Sportwinkel", products, cart });
  } catch (error) {
    console.error(error);
  }
};

export { indexPage, cartPage };
