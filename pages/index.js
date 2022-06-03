import Link from "next/link";
import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.centerInPage}>
        <h1 className={styles.title}>Halesworth Treasure Map</h1>
        <p className={styles.text}>
          This map contains a collection of services available in Halesworth.
        </p>
        <p className={styles.text}>Add some more description text here</p>
        <Link href="/map-page" passHref>
          <a className={styles.linkWrapper}>Go to the map</a>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
