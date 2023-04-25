import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height:  100vh;
  background-color: cadetblue;
`
export const Box = styled.div`
  text-align: center;
    
`
export const GameTitle = styled.h1`
  color: white;
  padding-top: 6rem;
  font-size: 6rem;
  letter-spacing: .6rem;
  @media(max-width: 738px){
    font-size: 3rem;
  }
`
export const Subtitle = styled.h2`
  color: white;
  padding-top: 2rem;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  @media(max-width: 738px){
    font-size: 1.3rem;
  }
  
`
export const PlayButton = styled.button`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-top: 3rem;
  padding: 1rem 4rem;
  border: 1px solid white;
  border-radius: 50px;
  background-color: transparent;
  @media(max-width: 738px){
    font-size: 1.3rem;
  }
`