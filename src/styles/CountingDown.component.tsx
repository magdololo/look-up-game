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
  padding: 0.8rem 1em;
  font-size: 1.6rem;
  @media only screen and (max-width: 800px) and (min-height: 801px) {
   padding: 0.8em 0;
  }
`;