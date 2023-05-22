import Link from "next/link";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

import News from "./News";
import Product from "./Product";
import Post from "./Post";
import Category from "./Category";
import Auth from "./Auth";
import Cart from "./Cart";

const MocksCards = ({ title, link }) => {
  const handleComponents = () => {
    const components = {
      News: <News />,
      Product: <Product />,
      Post: <Post />,
      Category: <Category />,
      Auth: <Auth />,
      Cart: <Cart />,
    };

    return components[title];
  };

  return (
    <Link href={`/mocks/${link}`}>
      <Card
        border="1px solid #eaeaea"
        _hover={{ border: "1px solid #3182CE", cursor: "pointer" }}
      >
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody sx={{ display: "flex", justifyContent: "center" }}>
          {handleComponents()}
        </CardBody>
      </Card>
    </Link>
  );
};

export default MocksCards;
