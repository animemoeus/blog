import NextLink from "next/link";
import React from "react";
import TextTruncate from "react-text-truncate";
// import moment from "moment";

import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Ma = (props) => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={4}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={4}
        py={3}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {props.created_at}
            {/* {moment(props.date).format("ll")} */}
          </chakra.span>
          <NextLink href={`/category/${props.post.category_slug}/`} passHref>
            <Link
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{ bg: "gray.500" }}
            >
              {props.post.category}
            </Link>
          </NextLink>
        </Flex>

        <Box mt={2}>
          <NextLink href={props.post.slug} passHref>
            <Link
              fontSize="2xl"
              color={useColorModeValue("gray.700", "white")}
              fontWeight="700"
              _hover={{
                color: useColorModeValue("gray.600", "gray.200"),
                textDecor: "underline",
              }}
            >
              {props.post.title}
            </Link>
          </NextLink>
          <chakra.p
            mt={2}
            color={useColorModeValue("gray.600", "gray.300")}
            fontSize="md"
          >
            {/* {props.content} */}
            <TextTruncate
              line={6}
              element="span"
              truncateText="..."
              text={props.post.content}
            />
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <NextLink href={props.post.slug} passHref>
            <Link
              color={useColorModeValue("brand.600", "brand.400")}
              _hover={{ textDecor: "underline" }}
            >
              Baca Selengkapnya
            </Link>
          </NextLink>

          <Flex alignItems="center">
            <Image
              mx={4}
              w={10}
              h={10}
              rounded="full"
              fit="cover"
              display={{ base: "none", sm: "block" }}
              src={props.author.pic}
              alt="avatar"
            />
            <Link
              color={useColorModeValue("gray.700", "gray.200")}
              fontWeight="700"
              cursor="pointer"
            >
              {props.author.name}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Ma;
