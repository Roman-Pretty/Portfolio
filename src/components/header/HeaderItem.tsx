import { Link, Text } from "@chakra-ui/react"
import React from "react"

// TODO: Make Type-Safe
const HeaderItem: React.FC<any> = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    )
}

export default HeaderItem