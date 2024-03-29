import UserContext from "@/contexts/UserContext";
import fetchHandler from "@/utils/fetchHandler";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    const cookies = new Cookies();
    setIsLoading(true);
    try {
      const res = await fetchHandler().get("/api/member/profile", {
        method: "GET",
        headers: {
          auth: cookies.get("auth"),
        },
      });
      setUser(res.data.user);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        refreshUser: fetchUser,
      }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H92ZEDHZTX"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H92ZEDHZTX');
        `}
      </Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1231858558080110"
        crossorigin="anonymous"
      ></Script>
    </UserContext.Provider>
  );
}
