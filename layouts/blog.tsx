import React from 'react';
import Head from 'next/head';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Box
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Container from '../components/Container';
import { IFrontMatter } from '../custom-types';

export default function BlogLayout({
  children,
  frontMatter
}: {
  children: React.ReactNode;
  frontMatter: IFrontMatter;
}) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  const router = useRouter();
  const slug = router.asPath.replace('/blog', '');
  return (
    <Container>
      <Head>
        <Heading>${slug} - Blog - ECC</Heading>
      </Head>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="900px"
        w="100%"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="900px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name="ECC"
                src="../images/portrait.jpeg"
                mr={2}
              />
              <Box fontSize="sm" color={textColor[colorMode]}>
                {'ECC / '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </Box>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
}
