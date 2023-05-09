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
  align-items: center;
    
`
export const GameTitle = styled.h1`
  color: white;
  padding-top: 6rem;
  font-size: 6rem;
  letter-spacing: .6rem;
  @media(max-width: 738px){
    font-size: 3rem;
    padding-top: 2rem;
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

export const TitleWithAnime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media(max-width: 738px){
    flex-direction: column;
    flex-flow: column-reverse;
  }
`

export const Anime = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 738px){
    padding-top: 2rem;
  }
`

export const Eye = styled.div`
  margin: 10px;
  width: 50px;
  height: 50px;
  border: solid 1px #000;
  border-radius:  100% 150%;
  position: relative;
  background-color: white;
  transform: rotate(45deg);
  ::before{
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    border: solid 1px #000;
    border-radius: 50%;
    left: 5px;
    top: 1px;
    background-color: lightblue;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    border: solid 1px #000;
    border-radius: 60px 50px;
    left: 10px;
    top: 1px;
    background-color: black
  }
`

export const LeftEye = styled.div``
export const RightEye = styled.div``
export const Brow = styled.div`
  width: 80px;
  height: 34px;
  border: solid 3px;
  border-image: none 100% / 1 / 0 stretch;
  border-color: rgb(0, 0, 0) transparent transparent;
  border-radius: 150% / 100px 100px 0px 0px;
  position: relative;
 
`
  //transform: rotate(75deg);`