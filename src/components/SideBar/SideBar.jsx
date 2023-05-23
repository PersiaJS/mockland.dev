import { Box } from "@chakra-ui/react";
import SidebarContent from "../SideBarContent/SideBarContent";
const SideBar = () => {
  return (
    <Box
      width={"300px"}
      minH={"100%"}
      pt={"3rem"}
      boxShadow={"2px 0 5px -2px #DCDCDC;"}
    >
      <SidebarContent />
    </Box>
  );
};

export default SideBar;
