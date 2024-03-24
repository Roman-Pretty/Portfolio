import React from 'react';
import { Box, BoxProps, Image } from '@chakra-ui/react';
import logo from './logo.png';

interface LogoProps extends BoxProps {}

const Logo: React.FC<LogoProps> = (props) => {
    return (
        <Box {...props}>
            <Image src={logo} alt="Logo" />
        </Box>
    );
};

export default Logo;