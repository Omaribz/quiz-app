import { HStack, Input, Text } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <HStack>
      <Text ml={3} fontSize="30px" fontWeight="bold" color="#2A4365">
        Quizes
      </Text>
      <Input
        borderRadius={10}
        my="5"
        mx={4}
        placeholder="Search..."
        variant="filled"
        width={{ sm: "80%", md: "20%", lg: "15%" }}
      />
    </HStack>
  );
};

export default SearchInput;
