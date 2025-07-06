import styled from "@emotion/styled";

export const SearchFormWrap = styled.form`
  display: flex;
  align-items: center;
  height: 46px;
  border: 2px solid #dbdbdb;
  border-radius: 10px;
`;

export const SearchFormInput = styled.input`
  flex: 1;
  display: block;
  height: 100%;
  border: none;
  padding: 6px 12px;
  background: none;
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 0 0 auto;
  font-size: 30px;
  color: #aaa;
  aspect-ratio: 1/1;
`;
