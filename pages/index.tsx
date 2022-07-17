import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Amazon clone</title>
      </Head>
      <main>
        <Navbar />
        {/* body */}
        {/* footer */}
      </main>
    </div>
  );
};

export default Home;
