import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 20px;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;
export const Item = styled.li`
  outline: 1px solid white;
  padding: 10px;
  border-radius: 10px;
`;
export const Title = styled.h2`
    font-size: 25px;
`;
export const Btn = styled.button`
  background-color: red;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 900;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;
