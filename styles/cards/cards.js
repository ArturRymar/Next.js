import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

const load6 = keyframes`
    0% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
    5%,
    95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
    10%,
    59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
    20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
    38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
    100% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }`;

const round = keyframes`
     0% {
     transform: rotate(0deg);
 }
     100% {
     transform: rotate(360deg);
 }`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  
`;
const LoadingContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Loading = styled.div`
  color: black;
  font-size: 50px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin-bottom: 30px;
  animation: ${load6} 1.7s infinite ease, ${round} 1.7s infinite ease;
`;

const LoadingDescription = styled.p`
  font-size: 20px;
  width: 150px;
  text-align: center;
  font-family: Arial;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-family: Arial;
  background: ${({ theme }) => theme.colors.primary};
`;

const CardItemContainer = styled.a`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  text-decoration: none;
  color: black;
  cursor: auto;
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  box-shadow: 0 1px 3px #272d39;
  margin: 10px;
  position: relative;
  background: white;
  &:hover:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      77deg,
      rgb(31, 33, 27) 100%,
      rgb(31, 33, 27) 100%
    );
    opacity: 0.1;
    cursor: pointer;
`;

const PokemonImage = styled.img`
  width: 360px;
  height: 336px;
  align-self: center;
  margin-top: 10px;
`;

const PokemonName = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin: 15px 0 15px 20px;
`;

const Description = styled.span`
  font-size: 16px;
  opacity: 0.7;
  margin: 0 20px 10px 20px;
  line-height: 1.5;
`;

const Back = styled.a`
  display: block;
  text-align: center;
  width: 100px;
  color: blue;
  font-weight: bold;
  font-size: 14px;
  border-radius: 15px;
  text-decoration: none;
  margin: 10px 10px 10px 20px;
  padding: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.7;
    cursor: pointer;
  }
`;

export {
  Loading,
  CardItemContainer,
  CardsContainer,
  PokemonContainer,
  PokemonImage,
  Description,
  PokemonName,
  Back,
  GlobalStyle,
  LoadingContainer,
  LoadingDescription
};
