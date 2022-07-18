import { Product } from "../typings";

export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const products: Product[] = data;
  console.log(products);
  return products;
};
