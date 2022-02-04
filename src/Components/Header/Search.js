import { SearchInput, SearchFormStyled } from "../../utils/StyledComponents/Styled";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

const SearchForm = ({ getSearchResult }) => {

  const [term, setTerm] = useState('');


  const handleClick = (e) => {
    e.preventDefault();
    getSearchResult(term);
  };

  const iconStyle = {
    position: "relative",
    left: "1.5em",
    color: "black",
  };


  return (
    
      <SearchFormStyled onSubmit={handleClick}>
        <MdOutlineSearch style={iconStyle}/>
        <SearchInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={term}
          data-testid="search-input"
          onChange={(e) => setTerm(e.target.value)}
        />
      </SearchFormStyled>
  );
};

export default SearchForm;