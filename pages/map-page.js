import dynamic from "next/dynamic";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { SpinnerRoundOutlined } from "spinners-react";
import Layout from "../src/components/Layout";

import styles from "../styles/MapPage.module.css";

const MapPage = ({ services }) => {
  const Map = dynamic(() => import("../src/components/Map"), {
    loading: () => (
      <div className={styles.centerSpinner}>
        <SpinnerRoundOutlined />
      </div>
    ),
    ssr: false,
  });

  return (
    <Layout pageHeading="Halesworth Treasure Map">
      <Map services={services} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://halesworth-treasure-map.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data, error } = await client.query({
    query: gql`
      query getServices {
        services {
          id
          name
          lat
          long
          assetType
          description1
          description2
          addressLine1
          addressLine2
          addressLine3
          postcode
          openingTimes
          emailAddress
          phoneNumber
          photo {
            url
            height
            width
          }
        }
      }
    `,
  });

  return {
    props: {
      services: data.services,
    },
    revalidate: 6000,
  };
};

export default MapPage;
