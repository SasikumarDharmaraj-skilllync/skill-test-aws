import Layout from "../components/layout"
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
