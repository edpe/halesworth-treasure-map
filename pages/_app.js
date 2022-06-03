import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import "../styles/globalStyles.css";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <GlobalContext.Provider value={global}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <title>Halesworth Treasure Map</title>
        <meta
          name="description"
          content="This map contains a collection of services available in Halesworth"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Halesworth Treasure Map" />
        <meta
          itemProp="description"
          content="This map contains a collection of services available in Halesworth"
        />
        <meta itemProp="image" content="/halesworth-meta.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://halesworth-map.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Halesworth Treasure Map" />
        <meta
          property="og:description"
          content="This map contains a collection of services available in Halesworth"
        />
        <meta property="og:image" content="/halesworth-meta.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Halesworth Treasure Map" />
        <meta
          name="twitter:description"
          content="  This map contains a collection of services available in Halesworth"
        />
        <meta name="twitter:image" content="/halesworth-meta.png" />
      </Head>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

MyApp.getStaticProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getStaticProps(ctx);
  const client = new ApolloClient({
    uri: "https://halesworth-treasure-map-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getGlobal {
        global {
          favicon {
            id
            created_at
            updated_at
            name
            alternativeText
            caption
            width
            height
            formats
            hash
            ext
            mime
            size
            url
            previewUrl
            provider
            provider_metadata
            related {
              __typename
            }
          }
        }
      }
    `,
  });
  return { ...appProps, pageProps: { global: data.global } };
};

export default MyApp;
