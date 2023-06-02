import { useState } from "react";

import {
  Flex,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import Landing from "@/components/Landing";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import BreadCrumb from "@/components/Breadcrumb";
import Meta from "@/components/Meta/Meta";
import { FaCheckCircle } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <>
      <Meta
        title="Mockland | Terms And Conditions"
        description={"Terms And Conditions of Mockland"}
      />
      <LayoutWithSideBar>
        <Flex flexDir={"column"} px={12} minH={"80vh"} gap={6}>
          <BreadCrumb
            pages={[
              { href: "/", name: "Home" },
              { href: "/terms-and-conditions", name: "Terms And Conditions" },
            ]}
          />
          <Landing
            head="Terms And Condition"
            text="Following are the terms and conditions of Mockland. Please read them carefully. By using our website, you agree to these terms and conditions."
          />
          <Tabs bgColor={"blue.50"}>
            <TabList>
              <Tab fontSize={{ base: "xs", md: "md" }}>General Terms</Tab>
              <Tab fontSize={{ base: "xs", md: "md" }}>Rules</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>
                  Our website is a platform that allows users to create and
                  share mockups.
                </Text>
                <br />
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    You must be at least 13 years of age to use our website.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    You need to provide your email address to create an account.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    You are responsible for keeping your password secure.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    You are responsible for any activity that occurs under your
                    account.
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <Text>
                  There are some rules that you must follow when using our
                  website.
                </Text>
                <br />
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    You may not use our website to share content that is
                    illegal, offensive, racist, hateful, sexist, defamatory,
                    harmful, deceptive, threatening, abusive, harassing,
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    You may not use our website to share content that is
                    intended to promote or incite violence.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    You may not use our website to share content that infringes
                    or violates someone else{`'`}s rights.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    You may not use our website to share content that contains
                    private or confidential information.
                  </ListItem>
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </LayoutWithSideBar>
    </>
  );
};

export default TermsAndConditions;
