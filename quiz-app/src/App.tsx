import { Grid, GridItem } from "@chakra-ui/react";
import SearchInput from "./components/SearchInput";
import QuizCard from "./components/QuizCard";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`,
        lg: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <SearchInput />
      </GridItem>
      <GridItem area="main">
        <QuizCard />
      </GridItem>
    </Grid>
  );
}
export default App;
