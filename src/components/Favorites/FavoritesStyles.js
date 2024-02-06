import styled from "styled-components";

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 25px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
  }
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  column-gap: 240px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0px;
  }
`;
export const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
