import Link from "next/link";
import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/ErrorPage.module.css";

const FiveHundredPage = () => {
  return (
    <Layout>
      <div className={styles.centerInPage}>
        <div className={styles.title}>
          {"We're very sorry but the map has been asleep . . ."}
        </div>

        <Image
          className={styles.errorImage}
          src="/sleeping.svg"
          alt="person sleeping"
          width={300}
          height={168}
        />

        <p className={styles.text}>
          {
            "This app goes to sleep to save energy when it's not been visited for a while"
          }
        </p>
        <p className={styles.text}>
          {"It should have woken up by now so please "}
          <Link href="/">{" click here to refresh the page "}</Link>
          {"or hit refresh on your browser and all should be fine"}
        </p>
      </div>
    </Layout>
  );
};

export default FiveHundredPage;
