import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home: NextPage = () => {
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
        </main>

        {/* footer */}
      </main>
    </div>
  );
};

export default Home;
