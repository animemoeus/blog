import React from "react";
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
        px={8}
        py={4}
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
            31 Februari 2022
          </chakra.span>
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
            {props.category}
          </Link>
        </Flex>

        <Box mt={2}>
          <Link
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {props.title}
          </Link>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            {props.content}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
          >
            Baca selengkapnya
          </Link>

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
