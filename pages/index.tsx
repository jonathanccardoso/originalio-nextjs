import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";

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
    <>
      <h1>Original.io Store</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          {product.images && (
            <img src={product.images} style={{ width: "300px" }} />
          )}
          <h2>R$ 20,00</h2>

          <Link href={"/" + product.id}>Visit Page</Link>

          <hr />
        </div>
      ))}
    </>
  );
};

export default HomePage;
