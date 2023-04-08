import axios from "axios";
import { getDataFromCart } from "../utilities/fakedb";

const productLoader = async () => {
  const cardData = [];
  try {
    const response = await axios.get("products.json");
    const { data } = response;
    const storedCart = getDataFromCart();
    for (const id in storedCart) {
      const foundData = data.find((singleData) => singleData.id === id);
      foundData.quantity = storedCart[id];
      cardData.push(foundData);
    }
    const productsData = data;
    return [productsData, cardData];
  } catch (error) {
    console.log(error);
  }
};

export default productLoader;
