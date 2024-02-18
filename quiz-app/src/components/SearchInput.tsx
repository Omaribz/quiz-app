import { HStack, Input, Text } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <HStack>
      <Text ml={5}>Quizes</Text>
      <Input
        borderRadius={10}
        my="5"
        mx={5}
        placeholder="Search..."
        variant="filled"
      />
    </HStack>
  );
};

export default SearchInput;
