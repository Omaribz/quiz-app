import SearchInput from "./components/SearchInput";
import QuizCard from "./components/QuizCard";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (searchText: string) => {
    setSearchValue(searchText);
  };

  return (
    <Box mx={{ base: 5, lg: 20 }}>
      <SearchInput onSearch={handleSearch} />
      <QuizCard searchValue={searchValue} />
    </Box>
  );
}
export default App;
