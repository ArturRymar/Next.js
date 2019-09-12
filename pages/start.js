import React from "react";
import gql from "graphql-tag";
import withApollo from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
//components
import Cards from "../components/Cards/Cards";
import App from "../components/App";
//styles
import {
  Loading,
  LoadingContainer,
  LoadingDescription,
  GlobalStyle
} from "../styles/cards/cards";

const GET_POKEMONS = gql`
  {
    pokemons(first: 9) {
      name
      id
      image
    }
  }
`;

const StartPage = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading)
    return (
      <LoadingContainer>
        <GlobalStyle />
        <Loading />
        <LoadingDescription>Please wait few seconds</LoadingDescription>
      </LoadingContainer>
    );
  if (error) return <p>Error :(</p>;
  return (
    <App>
      <Cards data={data.pokemons} />
    </App>
  );
};

export default withApollo(StartPage);
