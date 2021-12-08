import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/TypeScript.module.css";

const TypeScript: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript</title>
        <meta name="description" content="Learning TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>TypeScript</h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <header className={styles.sectionheader}>
            <h3 className={styles.heading}>What is TypeScript?</h3>
            <p className={styles.subheading}>
              TypeScript is an open source language and is a superset of
              JavaScript
            </p>
          </header>
          <ul className={styles.specslist}>
            <li className={styles.spec}>
              Offers additional features to JavaScript including static types
            </li>
            <li className={styles.spec}>Using types in completely optional</li>
            <li className={styles.spec}>Compiles down to regular JS</li>
            <li className={styles.spec}>
              Can be used for front-end JS as well as backend with Node.js
            </li>
            <li className={styles.spec}>Using types in completely optional</li>
            <li className={styles.spec}>
              Includes most features from ES6, ES7 (classes, arrow functions,
              etc)
            </li>
            <li className={styles.spec}>
              Types from 3rd party libraries can be added with type definitions
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TypeScript;
