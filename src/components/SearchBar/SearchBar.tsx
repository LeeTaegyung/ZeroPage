import {
  SearchFormButton,
  SearchFormInput,
  SearchFormWrap,
} from "@components/SearchBar/SearchBarStyles";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!search.length) {
      alert("검색어를 입력해주세요.");
      e.preventDefault();
    }
  };

  return (
    <SearchFormWrap
      action="https://www.google.com/search"
      onSubmit={handleSubmit}
    >
      <SearchFormInput
        type="text"
        value={search}
        onChange={handleChange}
        name="q"
      />
      <SearchFormButton>
        <IoSearch />
      </SearchFormButton>
    </SearchFormWrap>
  );
};

export default SearchBar;
