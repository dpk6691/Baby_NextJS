// _app.js
import "../styles/globals.css";
import Layout from "./layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head"; // Import Head from next/head

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
