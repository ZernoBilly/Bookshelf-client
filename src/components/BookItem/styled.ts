import styled from "styled-components";

export const BookItemContainer = styled.div`
  min-height: 8rem;
  min-width: 10rem;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

export const BookItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const BookItemSubtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 100;
`;
