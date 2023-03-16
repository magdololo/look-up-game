import styled from "styled-components";
import {Button} from "@mui/material";



export const StyledButton = styled(Button)`
    width: 170px;
    height: 50px;
    font-size: 30px;
    @media(min-width: 800px){
      width: 200px;
      height: 80px;
      font-size: 40px;

}
`

export const Timer = styled.div`
    font-size: 40px;
    margin: 25px auto;
  @media(min-width: 800px){
    font-size: 70px;
    margin: 100px auto;

  }
`