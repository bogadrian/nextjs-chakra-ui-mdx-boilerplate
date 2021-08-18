import dynamic from 'next/dynamic';

import {
  useColorMode,
  Button,
  Flex,
  Box,
  Spacer,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

import NextLink from 'next/link';
import styled from '@emotion/styled';

const DrwaerEx = dynamic(() => import('./Drwaer'));
const DarkModeSwitch = dynamic(() => import('./DarkModeSwitch'));

const Container = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();
  const mobile = useBreakpointValue({ md: true });

  const bgColor = {
    light: 'white',
    dark: '#171717'
  };

  const color = {
    light: 'black',
    dark: 'white'
  };

  const navHoverBg = {
    light: 'gray.600',
    dark: 'gray.300'
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="auto"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Text>Left side </Text>
        <Spacer />
        {mobile && (
          <Box>
            <NextLink href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                _hover={{ backgroundColor: navHoverBg[colorMode] }}
              >
                Home
              </Button>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Button
                as="a"
                variant="ghost"
                p={[1, 2, 4]}
                _hover={{ backgroundColor: navHoverBg[colorMode] }}
              >
                Blog
              </Button>
            </NextLink>
          </Box>
        )}
        {!mobile && (
          <Box mr={2}>
            <DrwaerEx />
          </Box>
        )}

        <DarkModeSwitch />
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100%"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[2, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
