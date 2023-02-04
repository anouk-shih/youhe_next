import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_TC } from "@next/font/google";
import Layout from "@/components/layout";

const noto = Noto_Sans_TC({
  weight: ["400", "700"],
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${noto.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
