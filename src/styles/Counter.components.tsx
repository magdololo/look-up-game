import styled from "styled-components";
import {Button} from "@mui/material";



export const StyledButton = styled(Button)(({ variant }) => ({
    width: 200,
    height: 80,
    fontSize: 40,
    backgroundColor: "white",
    ...(variant === "contained" && {
        backgroundColor: "black"
    }),
    ...(variant === "outlined" && {
        backgroundColor: "blue"
    })
}));

export const Timer = styled.div`
    font-size: 70px;
    margin: 100px auto;
`