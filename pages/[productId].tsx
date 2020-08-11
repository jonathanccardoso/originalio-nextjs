import React from "react";
import Stripe from "stripe";
import { GetStaticPaths, GetStaticProps } from "next";

import stripeConfig from "../config/stripe";

interface Props {
  product: Stripe.Product;
}

// next: create page
export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: "2020-03-02",
  });

  // each stored product
  const products = await stripe.products.list();

  // console.log("products", products.data);

  // one page for each registered product
  const paths = products.data.map((product) => ({
    params: {
      productId: product.id,
    },
  }));

  // console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
};

// next: get the information from the page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: "2020-03-02",
  });

  const { productId } = params;

  const product = await stripe.products.retrieve(productId as string);

  console.log("product", product);

  return {
    props: {
      product,
    },
  };
};

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {product.images && (
        <img src={product.images} style={{ width: "300px" }} />
      )}
      <h2>R$ 20,00</h2>
    </div>
  );
};

export default Product;
