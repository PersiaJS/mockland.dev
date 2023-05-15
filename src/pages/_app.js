import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/Layout/Layout";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
