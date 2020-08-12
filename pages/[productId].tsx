import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { GetStaticPaths, GetStaticProps } from "next";

import stripeConfig from "../config/stripe";
import CheckoutButton from "../components/CheckoutButton";

interface Props {
  product: Stripe.Product;
  price: Stripe.Price;
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
  // console.log("product", product);

  const prices = await stripe.prices.list();

  const priceFilter = prices.data.filter((price) => {
    return price.product === product.id;
  });
  // console.log("priceFilter", priceFilter);

  return {
    props: {
      product,
      price: priceFilter,
    },
  };
};

const Product: React.FC<Props> = ({ product, price }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {product.images && (
        <img src={`${product.images}`} style={{ width: "300px" }} />
      )}
      <h3>
        {price[0].unit_amount / 100} {price[0].currency.toUpperCase()}
      </h3>
      <CheckoutButton priceId={price[0].id} itemName={product.name} /> <br />{" "}
      <br />
      <Link href="/">Go back</Link>
    </div>
  );
};

export default Product;
