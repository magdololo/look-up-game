import styled from "styled-components";

export const CardsComponent = styled.div`
  width: 100vw;
  margin: 2em auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media(min-width: 800px){
    width: max-content;
    flex-direction: row;
   
  }
 
`