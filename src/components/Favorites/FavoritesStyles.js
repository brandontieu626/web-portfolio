import styled from 'styled-components';

export const Img = styled.img`
  max-width:100%;
  height:auto;
  object-fit:cover;
  margin: 10px 20px 20px;
  display: flex;
  transition: all .2s ease-in-out;
  &:hover{
    cursor:pointer;
    transform:scale(1.1);
    box-shadow: 0px 0px 15px  rgba(255,255,255,0.50); 
  }
`

export const GridDiv = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr
`
export const ItemDiv = styled.div`
  margin-bottom:20px;
`

