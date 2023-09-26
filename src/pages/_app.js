import "@/styles/globals.css";
import App from "next/app";

export default function NextApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

NextApp.getInitialProps = async (context) => {
  const initialProps = await App.getInitialProps(context);
  const viewport = context.ctx?.req?.cookies?.viewport;
  return { ...initialProps, viewport };
};
