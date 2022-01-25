import { Container } from "./styles";
import { FaSearch } from "../../../icons";

function Search() {
  return (
    <Container>
      <input type="text" placeholder="Search..." />
      <FaSearch />
    </Container>
  );
}

export default Search;
