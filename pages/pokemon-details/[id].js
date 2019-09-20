import React from "react";
import withApollo from "../../lib/apollo";
import Link from "next/link";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
//styles
import {
  Back,
  Loading,
  LoadingContainer,
  LoadingDescription,
  GlobalStyle,
  PokemonImage
} from "../../styles/cards/cards";
import {
  Container,
  Content,
  ImageContainer,
  Item,
  Type,
  Classification
} from "../../styles/cards/pokemon-details";
//components
import AttacksTable from "../../components/Pokemon-details/AttacksTable";
import App from "../../components/App";

const GET_POKEMON = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      classification
      maxHP
      resistant
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;

const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { id }
  });

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
      <Link href="/" passHref>
        <Back>Back to main page</Back>
      </Link>
      <Container>
        <ImageContainer>
          <PokemonImage src={data.pokemon.image} />
          <h1>{data.pokemon.name}</h1>
        </ImageContainer>
        <Content>
          <Type>Type: {data.pokemon.types}</Type>
          <Classification>
            Classification : {data.pokemon.classification}
          </Classification>
          <Item>Weight(min): {data.pokemon.weight.minimum}</Item>
          <Item>Weight(max): {data.pokemon.weight.maximum}</Item>
          <Item>Height(min): {data.pokemon.height.minimum}</Item>
          <Item>Height(max): {data.pokemon.height.maximum}</Item>
          <Item>MaxHP: {data.pokemon.maxHP}</Item>
          <Item>Resistant: {data.pokemon.resistant.join(", ")}</Item>
          <Item>
            Fast attacks:
            <AttacksTable data={data.pokemon.attacks.fast} />
          </Item>
          <Item>
            Special attacks:
            <AttacksTable data={data.pokemon.attacks.special} />
          </Item>
        </Content>
      </Container>
    </App>
  );
};

export default withApollo(PokemonDetails);
