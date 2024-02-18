import { Grid, GridItem } from "@chakra-ui/react";
import SearchInput from "./components/SearchInput";

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
      <GridItem area="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
}
export default App;
