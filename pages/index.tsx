import type { GetServerSideProps } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { fetchProducts } from "../utils/fetchProducts";
import { Product } from "../typings";

interface Props {
  products: Product[];
}

const Home = ({ products }: Props) => {
  //console.log(products);
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Amazon clone</title>
      </Head>
      <main>
        <Navbar />
        {/* body */}
        <main className="max-w-7xl mx-auto">
          <Banner />

          <ProductFeed products={products} />
        </main>

        {/* footer */}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
  };
};

export default Home;
