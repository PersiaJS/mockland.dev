import UserContext from "@/contexts/UserContext";
import fetchHandler from "@/utils/fetchHandler";
import { ChakraProvider } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    const cookies = new Cookies();
    try {
      const res = await fetchHandler("/api/member/profile", {
        method: "GET",
        headers: {
          auth: cookies.get("auth"),
        },
      });
      setUser(res.data.user);
    } catch (err) {
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
        refreshUser: fetchUser,
      }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserContext.Provider>
  );
}
