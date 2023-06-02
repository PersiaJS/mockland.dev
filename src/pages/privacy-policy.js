import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import Landing from "@/components/Landing";
import BreadCrumb from "@/components/Breadcrumb";
import Meta from "@/components/Meta/Meta";

function PrivacyPolicy() {
  return (
    <>
      <Meta
        title="Mockland | Privacy Policy"
        description="Privacy Policy of Mockland"
      />
      <LayoutWithSideBar>
        <Flex flexDir={"column"} px={"12"} gap={6}>
          <BreadCrumb
            pages={[
              { href: "/", name: "Home" },
              { href: "/privacy-policy", name: "Privacy Policy" },
            ]}
          />
          <Landing
            head="Privacy Policy"
            text="Your privacy is important to us. We respect your privacy
              regarding any information we may collect from you across our
              website."
          />
          <Flex gap={12} direction={{ base: "column", md: "row" }}>
            <Box display={"grid"} alignItems={"center"}>
              <Heading as="h2" fontSize="xl" color={"blue.500"}>
                General Policies
              </Heading>
              <Text mt={5}>
                We only ask for personal information when we truly need it to
                provide a service to you. We collect it by fair and lawful
                means, with your knowledge and consent. We also let you know why
                we’re collecting it and how it will be used.
              </Text>
              <Text mt={5}>
                We only retain collected information for as long as necessary to
                provide you with your requested service. What data we store,
                we’ll protect within commercially acceptable means to prevent
                loss and theft, as well as unauthorized access, disclosure,
                copying, use or modification.
              </Text>
              <Text mt={5}>
                We don’t share any personally identifying information publicly
                or with third-parties, except when required to by law.
              </Text>
              <Text mt={5}>
                Our website may link to external sites that are not operated by
                us. Please be aware that we have no control over the content and
                practices of these sites, and cannot accept responsibility or
                liability for their respective privacy policies.
              </Text>
              <Text mt={5}>
                You are free to refuse our request for your personal
                information, with the understanding that we may be unable to
                provide you with some of your desired services.
              </Text>
              <br />
              <Heading as={"h2"} color={"blue.500"} fontSize="xl">
                Changes about privacy
              </Heading>
              <Text mt={5} pb={10}>
                We may update our Privacy Policy from time to time. Thus, we
                advise you to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. These changes are effective immediately, after
                they are posted on this page.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </LayoutWithSideBar>
    </>
  );
}

export default PrivacyPolicy;
