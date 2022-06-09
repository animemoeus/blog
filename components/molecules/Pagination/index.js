import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { chakra, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Pagination(props) {
  const router = useRouter();

  const handlePrevious = () => {
    if (props.previous !== null) {
      router.push(`/?page=${props.previous}`);
    }
  };

  const handleNext = () => {
    if (props.next !== null) {
      router.push(`/?page=${props.next}`);
    }
  };

  const PagButton = (props) => {
    const activeStyle = {
      bg: useColorModeValue("brand.600", "brand.500"),
      color: useColorModeValue("white", "gray.200"),
    };

    return (
      <chakra.button
        mx={1}
        px={4}
        py={2}
        rounded="md"
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.700", "gray.200")}
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active && activeStyle)}
      >
        {props.children}
      </chakra.button>
    );
  };

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={3}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <div onClick={handlePrevious}>
          <PagButton disabled={props.previous !== null ? false : true}>
            <Icon
              as={IoIosArrowBack}
              color={useColorModeValue("gray.700", "gray.200")}
              boxSize={4}
            />
          </PagButton>
        </div>

        <div onClick={handleNext}>
          <PagButton disabled={props.next !== null ? false : true}>
            <Icon
              as={IoIosArrowForward}
              color={useColorModeValue("gray.700", "gray.200")}
              boxSize={4}
            />
          </PagButton>
        </div>
      </Flex>
    </Flex>
  );
}
