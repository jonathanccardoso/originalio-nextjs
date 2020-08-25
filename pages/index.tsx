import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryThumbnail from "../components/GalleryThumbnail";
import PurchaseItems from "../components/PurchaseItems";

import stripeConfig from "../config/stripe";

interface Props {
  products: Stripe.Product[];
}

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: "2020-03-02",
  });

  const products = await stripe.products.list();

  return {
    props: {
      products: products.data,
    },
  };
};

const HomePage: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <GalleryThumbnail />

      <PurchaseItems context={products} />

      <Footer />
    </div>
  );
};

export default HomePage;
