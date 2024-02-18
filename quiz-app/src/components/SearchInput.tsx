import { HStack, Input, Text } from "@chakra-ui/react";
import { useRef } from "react";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchInputRef.current) {
      const searchText = searchInputRef.current.value.trim();
      onSearch(searchText);
    }
  };

  return (
    <HStack>
      <Text ml={3} fontSize="25px" fontWeight="bold" color="#2A4365">
        Quizes
      </Text>
      <Input
        borderRadius={10}
        my="5"
        mx={4}
        placeholder="Search..."
        variant="filled"
        width={{ sm: "10%", md: "20%", lg: "15%" }}
        ref={searchInputRef}
        onChange={handleSearch}
      />
    </HStack>
  );
};

export default SearchInput;
