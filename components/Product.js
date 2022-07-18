import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

function Product({ id, title, price, description, category, image, rating }) {
  const rate = Math.round(rating.rate);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30  p-10 ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {[...Array(rate)].map((e, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))}
      </div>
      <p className="text-xs mt-2 mb-2 line-clamp-2">{description}</p>
      <div className="mb-5">${price}</div>
      <div className="flex items-center space-x-2">
        <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
      </div>

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
