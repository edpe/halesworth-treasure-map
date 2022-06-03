import Link from "next/link";
import Image from "next/image";
import Layout from "../src/components/Layout";
import styles from "../styles/ErrorPage.module.css";

const FourHundredPage = () => {
  return (
    <Layout>
      <div className={styles.centerInPage}>
        <div className={styles.title}>
          {"We're very sorry but we can't find the page you're looking for"}
        </div>
        <Image
          className={styles.errorImage}
          src="/thinking.svg"
          alt="person sleeping"
          width={300}
          height={168}
        />
        <p className={styles.text}>
          {"Try going to"}
          <Link href="/">{" the landing page "}</Link>
          {"instead"}
        </p>
      </div>
    </Layout>
  );
};

export default FourHundredPage;
