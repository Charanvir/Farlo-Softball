import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </main>
  );
}
