import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PageMetaTags } from "../models/PageMetaTags";
import renderMetaTags from "../utils/common/renderMetaTags";
import UserContainer from "../components/User/UserContainer";
import React from "react";
import ProductContainer from "../components/Product/ProductContainer";

const opengraphData: PageMetaTags = {
  site_name: "Shopping List Page",
  title: "주문 내역 페이지 | Shopping List Page",
  description: "주문 내역 페이지 연습",
  og: {
    title: "주문 내역 페이지 | Shopping List Page",
    description: "주문 내역 페이지 연습",
  },
  img: `/favicon.ico`,
};

const Home: NextPage = () => {
  return (
    <>
      <Head>{renderMetaTags(opengraphData)}</Head>

      <UserContainer />
      <div>주문 / 배송 조회</div>
      <ProductContainer />
    </>
  );
};

export default Home;
