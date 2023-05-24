import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const BreadCrumb = ({ pages }) => {
  return (
    <Breadcrumb
      sx={{
        my: 2,
        fontSize: "sm",
        color: "gray.500",
      }}
      separator={<ChevronRightIcon />}
    >
      {pages.map((page) => (
        <BreadcrumbItem _hover={{ color: "blue.500" }}>
          <BreadcrumbLink
            _hover={{ textDecoration: "none" }}
            as={Link}
            href={page?.href}
          >
            {page?.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
