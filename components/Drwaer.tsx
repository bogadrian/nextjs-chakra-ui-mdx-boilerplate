import React, { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Box,
  VStack,
  Flex,
  StackDivider,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
function DrawerEx() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();
  const { colorMode } = useColorMode();

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
  return (
    <>
      <HamburgerIcon
        as="button"
        ref={btnRef}
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        onClick={onOpen}
        height="40px"
        width="40px"
      >
        Open
      </HamburgerIcon>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent width="3000px">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody height="300px">
            <Input placeholder="Type here..." />
            <Flex flexDirection="column">
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
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerEx;
