import styled, {keyframes} from "styled-components";

const scales = keyframes`
   from {
     transform: scale(0); 
     color: yellow;
  }

  to {
    transform: scale(2);
    color: red;
  }
`;
 export const Number = styled.div`
  display: inline-block;
  animation: ${scales} 1s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.6rem;
`;