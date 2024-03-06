// _app.js
import "../styles/globals.css";
import Layout from "./layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
