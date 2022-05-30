import Head from "next/head";
import Navbar from "../components/molecules/Navbar";
import ReactMarkdown from "react-markdown";
import React from "react";

import {
  // chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  // Link,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import "github-markdown-css/github-markdown.css";

const Post = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.data.title} | Arter Tendean</title>
      </Head>

      <Navbar />

      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={11}
        w="full"
        alignItems="center"
        justifyContent="center"
        mt={1}
      >
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg={useColorModeValue("white", "gray.800")}
          maxW="2xl"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src="https://cdn.discordapp.com/attachments/858938620425404426/977921721015357480/waifu-animemoeus.jpg"
            alt="Article"
          />

          <Box p={4}>
            <Box>
              <Text
                display="block"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="2xl"
                mt={1}
                mb={4}
                // _hover={{ color: "gray.600", textDecor: "underline" }}
              >
                {props.post.data.title}
              </Text>

              <ReactMarkdown
                sx={{ filter: "blur(8px)" }}
                className="markdown-body"
              >
                {props.post.data.content}
              </ReactMarkdown>
            </Box>

            {/* <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <Link
                    mx={2}
                    fontWeight="bold"
                    color={useColorModeValue("gray.700", "gray.200")}
                  >
                    Jone Doe
                  </Link>
                </Flex>
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  21 SEP 2015
                </chakra.span>
              </Flex>
            </Box> */}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const postSlug = context.params.slug;

  // Fetch data from external API
  const res = await fetch(`${process.env.API_URL}/blog/api/post/${postSlug}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { post: data } };
}
