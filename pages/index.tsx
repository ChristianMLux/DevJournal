import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevJournal</title>
        <meta
          name="description"
          content="Just a couple of Informations i gathered while learning new coding stuff"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>Welcome to my DevJournal</h1>
        <nav>
          <Link href="TypeScript/typeScript">
            <a>TypeScript</a>
          </Link>
        </nav>
      </header>
      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
