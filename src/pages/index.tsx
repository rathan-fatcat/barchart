import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "../feature/HomePage";
import { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    document.body.classList.add(styles.bodyTag);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.highcharts.com/modules/offline-exporting.js"></script>
      </Head>

      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
};

export default Home;