import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";

import styled from "styled-components";
import Header from "../components/Header";

import stripeConfig from "../config/stripe";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

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
      <Title>Original.io Store</Title>

      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          {product.images && (
            <img src={`${product.images}`} style={{ width: "300px" }} />
          )}
          <h2>R$ 20,00</h2>

          <Link href={"/" + product.id}>Visit Page</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
