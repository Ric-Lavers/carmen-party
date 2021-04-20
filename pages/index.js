import Head from "next/head";
import styles from "../styles/Home.module.css";
// import sketch from "../scripts/sketch";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button id="upload_widget">join the party</button>
      </main>
    </div>
  );
}
