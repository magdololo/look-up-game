import styled from "styled-components";

export interface SingleCardProps{
    primary: boolean
}
export const SingleCard = styled.div`
    
    width: 500px;
    height: 500px;
    border: 1px solid blue;
    border-radius: 50%;
  
  @media(max-width: 800px){
   
  }
 
`