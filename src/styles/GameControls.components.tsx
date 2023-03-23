import styled from "styled-components";
import {Button} from "@mui/material";




export const StyledButton = styled(Button)`
    width: 160px;
    height: 50px;
    font-size: 30px;
    margin: 0.3rem!important;
    @media(min-width: 800px){
      width: 200px;
      height: 80px;
      font-size: 40px;

}
`
export const GameButtons = styled.div`
    margin-top:  2rem;
    text-align: center;
    
    `