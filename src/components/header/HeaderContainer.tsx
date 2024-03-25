import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'

interface NavBarContainerProps extends FlexProps {
    children: React.ReactNode
}

const HeaderContainer: React.FC<NavBarContainerProps> = ({ children, ...props }) => {
    return (
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100vw"
        p={"4rem"}
        {...props}
      >
        {children}
      </Flex>
    )
  }

export default HeaderContainer