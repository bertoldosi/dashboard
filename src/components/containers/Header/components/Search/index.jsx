import { StyleContainer, StyleDropdown, StyleInputContainer } from "./styles";
import { FaSearch } from "@Icons";
import Dropdown from "@Common/Dropdown";

export const Search = () => {
  return (
    <>
      <StyleContainer>
        <StyleInputContainer>
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </StyleInputContainer>
      </StyleContainer>

      <StyleDropdown>
        <Dropdown
          hideChevronIcon
          icon={<FaSearch />}
          elements={
            <StyleInputContainer>
              <input type="text" placeholder="Search..." />
            </StyleInputContainer>
          }
        />
      </StyleDropdown>
    </>
  );
};
