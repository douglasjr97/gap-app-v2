import "@/styles/globals.css";
import "@/styles/index.scss";
import "@/components/Utilities/DynamicStars/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import "react-day-picker/dist/style.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Utilities/Footer";
import Header from "@/components/Utilities/Header";
import { Toaster } from "react-hot-toast";
import WagmiProvider from "@/components/Utilities/WagmiProvider";
import NextThemeProvider from "@/components/Utilities/NextThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider>
      <Toaster />
      <NextThemeProvider>
        <div className="min-h-screen flex flex-col justify-between h-full bg-gray-100 dark:bg-black dark:text-white">
          <div>
            <div className="fixed w-full bg-white dark:bg-black z-10">
              <Header />
            </div>
            <div className="h-[68px] w-full" />
            <Layout Component={Component} pageProps={pageProps} />
          </div>
          <Footer />
        </div>
      </NextThemeProvider>
    </WagmiProvider>
  );
}

const Layout = ({ Component, pageProps }: any) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};
