import { Button, Box } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

interface ContactButtonProps {
    isOpen: boolean
}

const ContactButton: React.FC<ContactButtonProps> = ({ isOpen }) => {

    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Button
                as={"a"}
                rightIcon={<FaArrowRight />}
                colorScheme="orange"
                cursor={"pointer"}
                href="mailto:romanjjpretty@gmail.com">
                Contact Me
            </Button>
        </Box>
    );
};

export default ContactButton;