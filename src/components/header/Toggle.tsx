import React from "react"
import { Box } from "@chakra-ui/react"
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

interface ToggleProps {
    toggle: () => void
    isOpen: boolean
}

const Toggle: React.FC<ToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} color="black" cursor={"pointer"} onClick={toggle}>
      {isOpen ? <IoClose /> : <LuMenu />}
    </Box>
  )
}

export default Toggle