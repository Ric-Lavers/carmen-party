import Head from "next/head";
import styles from "../styles/Home.module.css";
// import sketch from "../scripts/sketch";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carmen sucks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          title="add a image and we'll find the face and size it"
          className={styles.joinParty}
          id="upload_widget"
        >
          join the party
        </button>
      </main>
    </div>
  );
}
