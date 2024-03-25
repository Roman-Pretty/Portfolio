import HeaderItem from './HeaderItem';
import { Stack, Box } from '@chakra-ui/react';

interface HeaderItemListProps {
    isOpen: boolean
}

const HeaderItemList: React.FC<HeaderItemListProps> = ({ isOpen }) => {

    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "column", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <HeaderItem to="/">Home</HeaderItem>
                <HeaderItem to="/about">About</HeaderItem>
                <HeaderItem to="/portfolio">Portfolio</HeaderItem>
            </Stack>
        </Box>
    )
}

export default HeaderItemList;