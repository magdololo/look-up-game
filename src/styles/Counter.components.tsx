import styled from "styled-components";
import {Button} from "@mui/material";



export const StyledButton = styled(Button)(({ variant }) => ({
    width: 500,
    fontSize: 40,
    backgroundColor: "white",
    ...(variant === "contained" && {
        backgroundColor: "black"
    }),
    ...(variant === "outlined" && {
        backgroundColor: "blue"
    })
}));